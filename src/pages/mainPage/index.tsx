import Notice from '../../components/Notice';
import Layout from '../../containers/Layout';
import Styled from './index.styles';
import dayjs from 'dayjs';
import Calendar from '../../components/Calendar';
import useWeekList from '../../hooks/useWeekList';
import { useState } from 'react';

function MainPage() {
  const { baseDate, dayNames, setBaseDate, weekList } = useWeekList();

  return (
    <>
      <Layout>
        <Styled.MainPageContainer>
          <Styled.ContentHeader>
            <Notice />
          </Styled.ContentHeader>

          <Styled.ContentBody>
            <div>
              <Calendar
                todayDate={new Date()}
                clickedDate={baseDate}
                baseDate={baseDate}
                setBaseDate={setBaseDate}
                dayNames={dayNames}
                weekList={weekList}
                // onPrevButtonClick={() => {
                //   setBaseDate(
                //     dayjs(baseDate).endOf('week').subtract(1, 'week').toDate(),
                //   );
                // }}
                // onNextButtonClick={() => {
                //   console.log(baseDate.toISOString());
                //   console.log(
                //     dayjs(baseDate)
                //       .startOf('week')
                //       .add(1, 'week')
                //       .toDate()
                //       .toISOString(),
                //   );
                //   setBaseDate(
                //     dayjs(baseDate).startOf('week').add(1, 'week').toDate(),
                //   );
                // }}
                onDateClick={(date: Date) => {
                  setBaseDate(date);
                }}
              />
            </div>
          </Styled.ContentBody>
        </Styled.MainPageContainer>
      </Layout>
    </>
  );
}

export default MainPage;

import React from 'react';
import dayjs from 'dayjs';

const MAX_DATE_LENGTH = 35;
const MAX_DAY_LENTH = 7;
const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];
type DateValue = {
  date: Date;
  value: number;
};

const useWeekList = (initialDate = new Date()) => {
  const [baseDate, setBaseDate] = React.useState(initialDate);

  const weekList: DateValue[][] = [...new Array(MAX_DATE_LENGTH)]
    .map((_, i) => i + 1)
    .reduce(
      (prev, date) => {
        const day = dayjs(baseDate).set('date', date);
        if (day.month() !== baseDate.getMonth()) {
          return prev;
        }
        prev[prev.length - 1].push({ date: day.toDate(), value: day.date() });
        if (day.day() === 6) {
          prev.push([]);
        }
        return prev;
      },
      [[]] as DateValue[][],
    )
    .filter((v) => !!v.length);

  /** @deprecated 재활용 할 것이면 DateValue Type을 적용하십시오 */
  const weekPrevMonthPadding: number[] = [
    ...new Array(MAX_DAY_LENTH - weekList[0].length),
  ]
    .map((_, i) => i + 1)
    .map((dateDifference) =>
      dayjs(baseDate).startOf('month').subtract(dateDifference, 'day').date(),
    )
    .reverse();

  /** @deprecated 재활용 할 것이면 DateValue Type을 적용하십시오 */
  const weekNextMonthPadding: number[] = [
    ...new Array(MAX_DAY_LENTH - weekList[weekList.length - 1].length),
  ]
    .map((_, i) => i + 1)
    .map((dateDifference) =>
      dayjs(baseDate).endOf('month').add(dateDifference, 'day').date(),
    );

  return {
    baseDate: baseDate,
    setBaseDate: setBaseDate,
    dayNames: DAY_NAMES,
    weekList,
    weekPrevMonthPadding,
    weekNextMonthPadding,
  };
};

export default useWeekList;

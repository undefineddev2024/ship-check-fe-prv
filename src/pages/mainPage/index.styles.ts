import styled from 'styled-components';

const MainPageContainer = styled.div`
  margin: 0 auto;
  width: 1280px;
  gap: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeader = styled.div`
  display: flex;

  gap: 40px;

  > div {
    min-width: 655px;

    display: flex;
    align-items: stretch;
    justify-content: center;
    /* flex: 1 1 0; */
  }
`;

const ContentBody = styled.div``;

export default { MainPageContainer, ContentHeader, ContentBody };

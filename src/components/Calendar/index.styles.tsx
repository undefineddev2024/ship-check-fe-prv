import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 16px;
`;

const Header = styled.div`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  line-height: 60px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const FlexHorizontal = styled.div`
  display: flex;
  flex-direction: row;
`;

const RoundBox = styled.div`
  width: 58px;
  height: 58px;
  box-sizing: border-box;
  background: #ffffff;
  border: 3px solid #f6f6f6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
// const Header = styled.div`
//   width: 484px;
//   height: 58px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .round_box {
//     width: 58px;
//     height: 58px;
//     box-sizing: border-box;
//     background: #ffffff;
//     border: 3px solid #f6f6f6;
//     box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
//     border-radius: 20px;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     cursor: pointer;
//   }

//   .title {
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 700;
//     size: 24px;
//   }
// `;

// const Content = styled.div`
//   gap: 16px 0;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .flex_horizontal {
//     display: flex;
//     flex-direction: row;
//   }
// `;

export default {
  Container,
  Header,
  Content,
  FlexHorizontal,
  RoundBox,
};

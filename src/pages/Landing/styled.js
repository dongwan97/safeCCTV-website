import styled from 'styled-components';

export const Root = styled.div``;
export const TitleTypo = styled.p`
  /* font-weight: ; */
`;

export const Car1 = styled.img`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  z-index: -2;
`;

export const LandingContainer = styled.div`
  position: relative;
  z-index: 1;
  top: 0px;
  left: 0px;
  margin: 0px;
`;

export const TopTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  width: 100vw;
  height: 100vh;
`;

export const SecondContainer = styled.div`
  display: flex;
  background-color: white;
`;

export const Crossboard1 = styled.img`
  width: 610px;
`;

export const SecondTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 70%;

  text-align: center;
`;

export const SecondTypoFirst = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const SecondTypoSecond = styled.p`
  font-size: 15px;
`;

export const ThirdContainer = styled.div`
  position: relative;
  background-color: #f9fafd;
  color: aliceblue;
  padding: 50px 200px;
`;

export const ThirdTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;

export const ThirdTypoTop = styled.p`
  position: relative;
  font-size: 27px;
  font-weight: bold;
  color: orange;
`;

export const ThirdTypoText = styled.p`
  font-size: 15px;
  text-align: center;
  color: black;
`;

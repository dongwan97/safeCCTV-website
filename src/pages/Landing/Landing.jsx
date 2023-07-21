import car1 from 'assets/images/car.jpg';
import crossboard1 from 'assets/images/crossboard1.jpg';

import {
  Crossboard1,
  Root,
  SecondContainer,
  SecondTypoContainer,
  SecondTypoFirst,
  SecondTypoSecond,
  ThirdContainer,
  ThirdTypoContainer,
  ThirdTypoText,
  ThirdTypoTop,
  TopTypoContainer,
  Car1,
  LandingContainer,
} from './styled';

export const Landing = () => {
  return (
    <Root>
      <Car1 src={car1} />

      <LandingContainer>
        <TopTypoContainer>
          <h2>We GO the Extra Mile for you</h2>
          <div>need a lift? we can help</div>
        </TopTypoContainer>

        <div>
          <SecondContainer>
            <Crossboard1 src={crossboard1} />
            <SecondTypoContainer>
              <SecondTypoFirst>아이들을 위한 안전한 환경을 고민합니다</SecondTypoFirst>
              <SecondTypoSecond>
                <p>어린이보호구역에서의 안전사고는 갈수록 늘어가고 있습니다.</p>
                <p>아이들의 안전은 저희 사회가 고려해야할 가장 우선적인 문제입니다</p>
                <p>아이들은 사회의 미래이자 희망입니다</p>
                <p>그렇기에 저희는 사회의 미래를 생각합니다.</p>
              </SecondTypoSecond>
            </SecondTypoContainer>
          </SecondContainer>
        </div>

        {/* <img src={meeting5} className="meeting5"></img> */}
        <ThirdContainer>
          <ThirdTypoContainer>
            <ThirdTypoTop>알면 좋은 서비스</ThirdTypoTop>
            <ThirdTypoText>이런 서비스도</ThirdTypoText>
            <ThirdTypoText>한번 써보세요</ThirdTypoText>
          </ThirdTypoContainer>
          <div className="service1">
            <h1>service1</h1>
            <p>service 설명</p>
            <button>홈페이지 방문</button>
          </div>
        </ThirdContainer>
      </LandingContainer>
    </Root>
  );
};

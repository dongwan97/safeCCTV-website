import styled from 'styled-components';
import bannerImg2 from 'assets/images/banner2.jpg';
import mainBackground from 'assets/images/mainBackground.jpg';
import contactImg from 'assets/images/mainBackground2.jpg';

export const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Banner = styled.div`
  background: url(${bannerImg2}) no-repeat center;
  background-size: cover;
  background-attachment: fixed;

  width: 110vw;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

export const BannerTypoTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 45px;
`;

export const BannerTypoWrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 70px;
  padding: 20px;
`;

export const BannerTypo = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
  margin-top: 10px;
`;

export const MainService = styled.div`
  width: 100vw;
  background: url(${mainBackground});
  height: 70vh;
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const MainServiceTitle = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
export const Line = styled.hr`
  width: 100px;
  border: 1px solid white;
`;

export const MainServiceContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 20px;
  text-align: center;
`;

// export const ServiceColor = styled.span`
//   color: orange;
// `;

export const ContactContainer = styled.div`
  background: url(${contactImg}) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactTitle = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
export const ContactContent = styled.p`
  color: white;
  font-size: 20px;
`;

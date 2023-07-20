import styled from 'styled-components';
import bannerImg from 'assets/images/banner.jpeg';
export const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
  overflow: hidden;
`;

export const Banner = styled.div`
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 600px;
  position: relative;
  border: 1px solid blue;
  overflow: hidden;
`;

export const BannerTypo = styled.p`
  position: absolute;
  top: 20px;
  left: 30px;
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

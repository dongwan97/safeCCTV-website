import styled from 'styled-components';
import bannerImg from 'assets/images/banner.jpg';

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
  background: url(${bannerImg}) no-repeat center;
  background-size: cover;
  width: 100vw;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

export const BannerTypoWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  background-color: #75c2f6;
  opacity: 0.9;
  border-radius: 20px;
  padding: 20px;
`;

export const BannerTypo = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

export const PostItemContainer = styled.div`
  border: 2px solid black;
`;

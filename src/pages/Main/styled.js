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
  padding-bottom: 100px;
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
  margin: 0 auto;
  border: 2px solid black;
  width: 80%;
`;

export const PostTitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  border-bottom: 2px solid black;
`;

export const CreatePostButton = styled.button`
  margin-top: 20px;
  background-color: yellowgreen;
  border-radius: 20px;
  color: white;
  width: 100px;
  height: 30px;
`;

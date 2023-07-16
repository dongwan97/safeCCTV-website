import styled from 'styled-components';
import childrenProtectImg from 'assets/images/children_protect.jpeg';

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid red;
`;

export const Banner = styled.div`
  border: 1px solid blue;
`;
export const BannerImg = styled.img`
  content: url(${childrenProtectImg});
  width: 100%;
  height: 100%;
  margin: 0;
`;
export const BannerTypo = styled.p``;

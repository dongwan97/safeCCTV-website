import { HEADER_HEIGHT, HEADER_MAX_WIDTH, HEADER_MIN_WIDTH } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.div`
  box-sizing: border-box;
  padding: 0 80px;
  position: fixed;
  left: 0;
  top: 0;
  height: ${HEADER_HEIGHT}px;
  background-color: white;
  z-index: 5;
  width: 100%;
  box-shadow: 1px 1px 5px gray;
`;

export const HeaderContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${HEADER_MAX_WIDTH}px;
  min-width: ${HEADER_MIN_WIDTH}px;
  height: 100%;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-top: 5px;
  width: 200px;
  cursor: pointer;
`;

export const NavigateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 50px;
  flex-basis: content;
`;

export const NavigateTypo = styled.p`
  font-size: 15px;
  font-weight: 900;
  vertical-align: middle;
  cursor: pointer;
  padding: 5px;
  color: #444444;
  &:hover {
    text-decoration: underline;
  }
`;

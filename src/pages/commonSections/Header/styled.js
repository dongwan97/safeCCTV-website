import { HEADER_HEIGHT, HEADER_MAX_WIDTH, HEADER_MIN_WIDTH } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${HEADER_HEIGHT}px;
  background-color: white;
  z-index: 5;
  width: 100%;
  border-bottom: 2px solid purple;
`;

export const HeaderContentWrapper = styled.div`
  max-width: ${HEADER_MAX_WIDTH}px;
  min-width: ${HEADER_MIN_WIDTH}px;
  height: 100%;
  line-height: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 200px;
  height: 20px;
`;

export const NavigateWrapper = styled.div`
  height: ${HEADER_HEIGHT}px;
  border: 1px solid red;
`;
export const NavigateTypo = styled.span`
  line-height: ${HEADER_HEIGHT}px;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  margin-right: 5px;
`;

import { BODY_MAX_WIDTH, BODY_MIN_WIDTH, HEADER_HEIGHT } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.div`
  //Body Root
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  padding-top: ${HEADER_HEIGHT}px;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
`;

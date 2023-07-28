import { STYLED_BUTTON_HEIGHT } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.div`
  margin: 0 auto;
  padding: 30px 150px;
`;

export const PostTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
`;

export const PostItemContainer = styled.div`
  border-top: 2px solid black;
  margin: 0 auto;
  margin-top: 15px;
  position: relative;

  & button {
    position: absolute;
    right: 0;
    bottom: calc(-${STYLED_BUTTON_HEIGHT + 10}px);
  }
`;

export const DescriptionTypo = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: #555555;
`;

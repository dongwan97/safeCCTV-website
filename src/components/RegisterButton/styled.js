import { GREEN } from 'constants/color';
import { REGISTER_BUTTON_HEIGHT } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.button`
  color: ${GREEN};
  background-color: white;
  border: 1px solid ${GREEN};
  border-radius: 20px;
  width: 100px;
  height: ${REGISTER_BUTTON_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${GREEN};
    color: white;
  }
`;

export const BulletinImg = styled.img`
  margin-right: 3px;
  width: 12px;
  height: 12px;
  color: white;
`;

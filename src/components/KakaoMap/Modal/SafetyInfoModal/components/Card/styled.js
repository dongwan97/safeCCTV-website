import { CARD_COLOR_GRAY } from 'constants/color';
import styled from 'styled-components';

export const Root = styled.div`
  &:nth-child(2) {
    margin-right: 30px;
  }
  width: 144px;
  height: 192px;
  border-radius: 3px;
  background-color: #2a2c33;
  text-align: center;
`;

export const TopStripe = styled.div`
  width: 100%;
  height: 25px;
  background-color: ${CARD_COLOR_GRAY};
`;
export const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-top: 43px;
`;

export const Count = styled.p`
  font-size: 35px;
  font-weight: 800;
  margin-top: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  column-gap: 30px;
`;

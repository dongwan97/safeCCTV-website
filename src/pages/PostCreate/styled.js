import { BODY_MAX_WIDTH } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.div`
  box-sizing: border-box;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
export const TitleTypo = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
export const TitleInput = styled.input`
  max-width: 800px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #999999;
  box-sizing: border-box;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  color: #333333;
`;

export const ContentInput = styled.textarea`
  position: relative;
  min-height: 400px;
  box-sizing: border-box;
  padding: 18px 15px;
  border-radius: 10px;
  border: 1px solid #999999;
  font-size: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 5px;
  align-self: flex-end;
`;

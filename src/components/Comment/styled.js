import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  padding: 5px;
`;
export const CommentOwnerName = styled.p`
  font-size: 15px;
  font-weight: 900;
`;
export const Content = styled.p`
  font-size: 15px;
  white-space: pre-line;
`;
export const Date = styled.p`
  font-size: 12px;
  color: #555555;
`;
export const FunctionTypo = styled.p`
  font-weight: 900;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const FunctionTypoContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  column-gap: 3px;
  font-size: 12px;
`;
export const EditTypo = styled(FunctionTypo)``;
export const DeleteTypo = styled(FunctionTypo)``;
export const EditInput = styled.textarea`
  width: 100%;
  font-size: 20px;
`;

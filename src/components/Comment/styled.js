import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  border: 1px solid black;
  width: 500px;
`;
export const CommentOwnerName = styled.p`
  font-size: 24px;
  font-weight: 900;
`;
export const Content = styled.p`
  font-size: 20px;
`;
export const Date = styled.p``;
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
`;
export const EditTypo = styled(FunctionTypo)``;
export const DeleteTypo = styled(FunctionTypo)``;

import styled from 'styled-components';

export const Root = styled.div``;
export const PostOwnerName = styled.p``;
export const Title = styled.p`
  font-weight: 800;
`;
export const Content = styled.div`
  white-space: pre-line;
`;
export const Date = styled.p``;
export const ViewCount = styled.p``;
export const UserNickname = styled.p``;

export const CommentContainer = styled.div``;

export const CommentInput = styled.textarea``;
export const FunctionTypoContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  column-gap: 3px;
`;
export const FunctionTypo = styled.p`
  font-weight: 900;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const EditTypo = styled(FunctionTypo)``;
export const DeleteTypo = styled(FunctionTypo)``;
export const EditInput = styled.textarea`
  width: 100%;
  font-size: 20px;
`;

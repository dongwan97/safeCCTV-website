import { CommentOwnerName, Content, Date, DeleteTypo, EditTypo, FunctionTypoContainer, Root } from './styled';

export const Comment = ({ commentId, commentOwnerName, content, date }) => {
  return (
    <Root>
      <CommentOwnerName>
        {commentId}. {commentOwnerName}
      </CommentOwnerName>
      <Content>{content}</Content>
      <Date>{date}</Date>
      <FunctionTypoContainer>
        <EditTypo>수정</EditTypo>
        <DeleteTypo>삭제</DeleteTypo>
      </FunctionTypoContainer>
    </Root>
  );
};

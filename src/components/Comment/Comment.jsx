import { CommentOwnerName, Content, Date, Root } from './styled';

export const Comment = ({ commentId, commentOwnerName, content, date }) => {
  return (
    <Root>
      <CommentOwnerName>
        {commentId}. {commentOwnerName}
      </CommentOwnerName>
      <Content>{content}</Content>
      <Date>{date}</Date>
    </Root>
  );
};

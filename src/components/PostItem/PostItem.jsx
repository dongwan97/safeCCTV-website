import { DateTypo, Nickname, Root, TitleTypo, ViewCount } from './styled';

export const PostItem = ({ title, date, viewCount, nickname, postId }) => {
  return (
    <Root>
      <DateTypo>{date}</DateTypo>
      <TitleTypo>{title}</TitleTypo>
      <ViewCount>조회수 : {viewCount}</ViewCount>
      <Nickname>{nickname}</Nickname>
    </Root>
  );
};

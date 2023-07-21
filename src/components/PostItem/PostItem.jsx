import { DateTypo, Root, TitleTypo, ViewCount } from './styled';

export const PostItem = ({ title, date, viewCount }) => {
  return (
    <Root>
      <DateTypo>{date}</DateTypo>
      <TitleTypo>{title}</TitleTypo>
      <ViewCount>조회수 : {viewCount}</ViewCount>
    </Root>
  );
};

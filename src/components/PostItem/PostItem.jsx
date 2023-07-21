import { useNavigate } from 'react-router-dom';
import { DateTypo, Nickname, Root, TitleTypo, ViewCount } from './styled';

export const PostItem = ({ title, date, viewCount, nickname, postId }) => {
  const navigate = useNavigate();
  const onClickTitleTypo = () => {
    navigate(`/post/${postId}`);
  };
  return (
    <Root>
      <DateTypo>{date}</DateTypo>
      <TitleTypo onClick={onClickTitleTypo}>{title}</TitleTypo>
      <ViewCount>조회수 : {viewCount}</ViewCount>
      <Nickname>{nickname}</Nickname>
    </Root>
  );
};

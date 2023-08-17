import { useNavigate } from 'react-router-dom';
import { DateTypo, Nickname, Root, TitleTypo, ViewCount } from './styled';
import { getFormattedDate } from 'utils/helper';

export const PostItem = ({ title, uploadedAt, viewCount, nickname, postId }) => {
  const navigate = useNavigate();
  const onClickTitleTypo = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <Root>
      <DateTypo>{getFormattedDate(uploadedAt)}</DateTypo>
      <TitleTypo onClick={onClickTitleTypo}>{title}</TitleTypo>
      <ViewCount>조회수 : {viewCount}</ViewCount>
      <Nickname>{nickname}</Nickname>
    </Root>
  );
};

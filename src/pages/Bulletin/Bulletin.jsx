import { PostItem } from 'components/PostItem';
import { DescriptionTypo, PostItemContainer, PostTitle, Root } from './styled';
import { RegisterButton } from 'components/StyledButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import sample from 'constants/samplePostItem';
import { StyledButton } from 'components/StyledButton/StyledButton';

export const Bulletin = () => {
  const navigate = useNavigate();
  const [currentPostList, setCurrentPostList] = useState(sample.sampleList);
  const onClickCreatePostButton = () => {
    navigate('/post/create');
  };

  useEffect(() => {
    //findAllPost api -> 페이지네이션?
  }, []);

  return (
    <Root>
      <PostTitle>🌈 정보공유게시판 </PostTitle>
      <DescriptionTypo>어린이 보호구역 세부정보를 공유해 볼까요? 👀</DescriptionTypo>
      <PostItemContainer>
        {currentPostList.map((item) => (
          <PostItem key={item.postId} {...item} />
        ))}
        <StyledButton onClickStyledButton={onClickCreatePostButton}>게시물 등록</StyledButton>
      </PostItemContainer>
    </Root>
  );
};

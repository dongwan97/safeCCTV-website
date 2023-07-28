import { KakaoMap } from 'components/KakaoMap';
import { Banner, BannerTypo, BannerTypoWrapper, PostItemContainer, PostTitle, Root } from './styled';
import sample from 'constants/samplePostItem';
import { PostItem } from 'components/PostItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterButton } from 'components/StyledButton';
export const Main = () => {
  const [currentPostList, setCurrentPostList] = useState(sample.sampleList);
  const navigate = useNavigate();
  useEffect(() => {
    //findAllPost api -> 페이지네이션?
  }, []);
  const onClickCreatePostButton = () => {
    navigate('/post/create');
  };
  return (
    <Root>
      <Banner>
        <BannerTypoWrapper>
          <BannerTypo>배너 텍스트</BannerTypo>
        </BannerTypoWrapper>
      </Banner>
      <KakaoMap />
      <PostItemContainer>
        <PostTitle>정보공유게시판</PostTitle>
        {currentPostList.map((item) => (
          <PostItem key={item.postId} {...item} />
        ))}
        <RegisterButton onClickRegisterButton={onClickCreatePostButton}>게시물 등록</RegisterButton>
      </PostItemContainer>
    </Root>
  );
};

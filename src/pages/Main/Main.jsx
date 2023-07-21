import { KakaoMap } from 'components/KakaoMap';
import { Banner, BannerTypo, BannerTypoWrapper, PostItemContainer, Root } from './styled';
import sample from 'constants/samplePostItem';
import { PostItem } from 'components/PostItem';
import { PostTitle } from 'components/PostItem/styled';
import { useEffect, useState } from 'react';
export const Main = () => {
  const [currentPostList, setCurrentPostList] = useState(sample.sampleList);
  useEffect(() => {
    //findAllPost api -> 페이지네이션?
  }, []);
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
      </PostItemContainer>
    </Root>
  );
};

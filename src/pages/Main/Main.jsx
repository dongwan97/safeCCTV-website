import { KakaoMap } from 'components/KakaoMap';
import { Banner, BannerTypo, BannerTypoWrapper, PostItemContainer, Root } from './styled';
import sample from 'constants/samplePostItem';
import { PostItem } from 'components/PostItem';
import { PostTitle } from 'components/PostItem/styled';
export const Main = () => {
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
        {sample.sampleList.map((item) => (
          <PostItem key={item.postId} {...item} />
        ))}
      </PostItemContainer>
    </Root>
  );
};

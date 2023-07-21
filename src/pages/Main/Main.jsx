import { KakaoMap } from 'components/KakaoMap';
import { Banner, BannerTypo, BannerTypoWrapper, Root } from './styled';

export const Main = () => {
  return (
    <Root>
      <Banner>
        <BannerTypoWrapper>
          <BannerTypo>배너 텍스트</BannerTypo>
        </BannerTypoWrapper>
      </Banner>
      <KakaoMap />
    </Root>
  );
};

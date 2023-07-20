import { KakaoMap } from 'components/KakaoMap';
import { Banner, BannerTypo, Root } from './styled';

export const Main = () => {
  return (
    <Root>
      <Banner>
        <BannerTypo>배너 텍스트</BannerTypo>
      </Banner>
      <KakaoMap />
    </Root>
  );
};

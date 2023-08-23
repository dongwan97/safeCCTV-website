import axiosInstance, { axiosGET } from '../../api/commonAxios/commonAxios';
import { KakaoMap } from 'components/KakaoMap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Banner,
  BannerTypo,
  BannerTypoWrapper,
  MainImg,
  MainService,
  MainServiceContent,
  MainServiceContentContainer,
  MainServiceSmall,
  MainServiceTitle,
  Root,
  Line,
  ContactContainer,
  ContactTitle,
  ContactContent,
  ServiceColor,
  BannerTypoTitle,
} from './styled';

export const Main = () => {
  const navigate = useNavigate();

  axiosGET('/post')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Root>
      <Banner>
        <BannerTypoWrapper>
          <BannerTypoTitle>안전관리의 </BannerTypoTitle>
          <BannerTypoTitle>새로운 스탠다드</BannerTypoTitle>
          <BannerTypo>한테크 실시간 관제 플랫폼</BannerTypo>
        </BannerTypoWrapper>
      </Banner>
      <MainService>
        <MainServiceTitle>service</MainServiceTitle>
        <Line />
        <MainServiceContent>
          저희의 실시간 관제플랫폼은 관리해야 할 안전구역을 한눈에 확인 가능하게 도와주고
          <br /> 직관적인 시각화를 통해 보다 쉽게 관리 할 수 있도록 도움을 드립니다.
        </MainServiceContent>
      </MainService>
      <KakaoMap />
      <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactContent>문의사항이 있으다면 한테크와 직접 contact 하세요. </ContactContent>
      </ContactContainer>
    </Root>
  );
};

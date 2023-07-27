import { Root } from './styled';
import React, { useState } from 'react';
import { SmallModal, BigModal } from './modal';
import CongestionSafetyIndicator from './CongestionSafetyIndicator';
import LineChart from './Chart';
import { Map } from 'react-kakao-maps-sdk';

export const KakaoMap = () => {
  const [isBigModalOpen, setIsBigModalOpen] = useState(false);

  const handleOpenBigModal = () => {
    setIsBigModalOpen(true);
  };

  const handleCloseBigModal = () => {
    setIsBigModalOpen(false);
  };

  return (
    <Root>
      KakaoMap
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
        style={{ width: '800px', height: '600px' }} // 지도 크기
        level={3} // 지도 확대 레벨
      ></Map>
      <h1>Hover and Click Modal Example</h1>
      <SmallModal content="Hover Me" onOpenBigModal={handleOpenBigModal}>
        {/* 작은 모달창의 내용 */}
        <h3>small Modal!</h3>
        <CongestionSafetyIndicator congestion={80} safety={60} />
      </SmallModal>
      <BigModal isOpen={isBigModalOpen} onClose={handleCloseBigModal}>
        {/* 더 큰 모달창의 내용 */}
        <h2>Hello, I am a Big Modal!</h2>
        <p>Big modal content goes here.</p>
        <LineChart />
      </BigModal>
    </Root>
  );
};

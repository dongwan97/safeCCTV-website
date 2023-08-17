import { Root } from './styled';
import React, { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { TooltipModal } from './Modal/TooltipModal';
import { SafetyInfoModal } from './Modal/SafetyInfoModal';

export const KakaoMap = () => {
  const [isTooltipModalOpen, setIsTooltipModalOpen] = useState(false);
  const [isSafetyInfoModalOpen, setIsSafetyInfoModalOpen] = useState(false);
  const closeTooltipModal = () => {
    setIsTooltipModalOpen(false);
  };
  const openTooltipModal = () => {
    setIsTooltipModalOpen(true);
  };

  const closeSafetyInfoModal = () => {
    setIsSafetyInfoModalOpen(false);
  };
  const openSafetyInfoModal = () => {
    setIsSafetyInfoModalOpen(true);
  };

  return (
    <Root>
      KakaoMap
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
        style={{ width: '800px', height: '600px' }} // 지도 크기
        level={3} // 지도 확대 레벨
      ></Map>
      <div onMouseEnter={openTooltipModal} onMouseLeave={closeTooltipModal}>
        툴팁 열기
      </div>
      {isTooltipModalOpen && (
        <TooltipModal openTooltipModal={openTooltipModal} openSafetyInfoModal={openSafetyInfoModal} />
      )}
      {isSafetyInfoModalOpen && <SafetyInfoModal closeModal={closeSafetyInfoModal} />}
    </Root>
  );
};

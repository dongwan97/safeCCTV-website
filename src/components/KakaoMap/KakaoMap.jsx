import { Root } from './styled';
import React, { useState, useEffect } from 'react';
import { Map, MapMarker, MapInfoWindow } from 'react-kakao-maps-sdk';
import { TooltipModal } from './Modal/TooltipModal';
import { SafetyInfoModal } from './Modal/SafetyInfoModal';
import { SmallModal, BigModal } from './modal';
import CongestionSafetyIndicator from './CongestionSafetyIndicator';
import LineChart from './Chart';
import bannerImg from 'assets/images/banner.jpg'



export const KakaoMap = () => {
  const [isBigModalOpen, setIsBigModalOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleOpenBigModal = () => {
    setIsBigModalOpen(true);
  };

  const handleCloseBigModal = () => {
    setIsBigModalOpen(false);
  };
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

  const positions = [
    { content: '서울 서초고등학교', lat: 37.489160, lng: 127.006103 },
    { content: '서울 고등학교', lat: 37.484227, lng: 127.005023 },
    { content: '서울 방일초등학교', lat: 37.485307, lng: 126.997942 },
    { content: '서울 방배중학교', lat: 37.494702, lng: 126.998253 },
  ];

  return (
    <Root>
      <Map
        center={{ lat: 37.489844, lng: 127.002296 }}
        level={4}
        style={{ width: '100%', height: '1000px' }}
      >
        {positions.map((position, index) => (
          <MapMarker
            key={index}
            position={{ lat: position.lat, lng: position.lng }}
            // onMouseOver={() => setSelectedMarker(position)}
            // onMouseOut={() => setSelectedMarker(null)}
            onClick={() => {
              if (selectedMarker === position) {
                setSelectedMarker(null); // 이미 선택된 마커를 다시 클릭하면 선택 해제
              } else {
                setSelectedMarker(position); // 다른 마커를 클릭하면 해당 마커 선택
              }}}
          />
        ))}

        {selectedMarker && (
          <MapInfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          >
            <div>{selectedMarker.content}</div>
          </MapInfoWindow>
        )}
      </Map>

      {/* <h1>Hover and Click Modal Example</h1>

      <SmallModal content="Hover Me" onOpenBigModal={handleOpenBigModal}>
        <h3>small Modal!</h3>
        <CongestionSafetyIndicator congestion={80} safety={60} />
      </SmallModal>
      <BigModal isOpen={isBigModalOpen} onClose={handleCloseBigModal}>
        <h2>Hello, I am a Big Modal!</h2>
        <p>Big modal content goes here.</p>
        <LineChart />
      </BigModal> */}
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



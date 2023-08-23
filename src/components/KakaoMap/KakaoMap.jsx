import { MapInfoWindowContent, MapInfoWindowWrapper, MapMarkerWrapper, Root } from './styled';
import React, { useState } from 'react';
import { Map, MapMarker, MapInfoWindow } from 'react-kakao-maps-sdk';
import { SafetyInfoModal } from './Modal/SafetyInfoModal';
import { ModalWrapper } from './Modal/commonStyled';

export const KakaoMap = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isSafetyInfoModalOpen, setIsSafetyInfoModalOpen] = useState(false);

  const closeSafetyInfoModal = () => {
    setIsSafetyInfoModalOpen(false);
  };
  const openSafetyInfoModal = () => {
    setIsSafetyInfoModalOpen(true);
  };

  const positions = [
    {
      content: '서울 서초고등학교',
      lat: 37.48916,
      lng: 127.006103,
      region: 'ganseong',
    },
    { content: '서울 고등학교', lat: 37.484227, lng: 127.005023, region: 'dongbu' },
    { content: '서울 방일초등학교', lat: 37.485307, lng: 126.997942, region: 'kwangjin_jayang' },
    { content: '서울 방배중학교', lat: 37.494702, lng: 126.998253, region: 'nokdong' },
  ];

  return (
    <Root>
      <Map center={{ lat: 37.489844, lng: 127.002296 }} level={5} style={{ width: '100%', height: '60vh' }}>
        {positions.map((position, index) => (
          <MapMarker
            key={index}
            position={position}
            onMouseOver={() => {
              setSelectedMarker(position);
            }}
            onClick={openSafetyInfoModal}
          />
        ))}

        {selectedMarker && (
          <MapInfoWindow position={{ lat: selectedMarker.lat + 0.0007, lng: selectedMarker.lng }}>
            <MapInfoWindowContent onClick={openSafetyInfoModal} onMouseOver={() => setSelectedMarker(selectedMarker)}>
              {selectedMarker?.content}
            </MapInfoWindowContent>
          </MapInfoWindow>
        )}
      </Map>

      <SafetyInfoModal
        closeModal={closeSafetyInfoModal}
        title={selectedMarker?.content}
        region={selectedMarker?.region}
        isOpen={isSafetyInfoModalOpen}
      />
    </Root>
  );
};

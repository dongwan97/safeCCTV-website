import { MapInfoWindowContent, MapInfoWindowWrapper, MapMarkerWrapper, Root } from './styled';
import React, { useState, useEffect } from 'react';
import { Map, MapMarker, MapInfoWindow } from 'react-kakao-maps-sdk';
import { SafetyInfoModal } from './Modal/SafetyInfoModal';

export const KakaoMap = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [lastMarker, setLastMarker] = useState(null);
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
    },
    { content: '서울 고등학교', lat: 37.484227, lng: 127.005023 },
    { content: '서울 방일초등학교', lat: 37.485307, lng: 126.997942 },
    { content: '서울 방배중학교', lat: 37.494702, lng: 126.998253 },
  ];

  return (
    <Root>
      <Map center={{ lat: 37.489844, lng: 127.002296 }} level={4} style={{ width: '100%', height: '1000px' }}>
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
              {selectedMarker.content}
            </MapInfoWindowContent>
          </MapInfoWindow>
        )}
      </Map>

      {isSafetyInfoModalOpen && <SafetyInfoModal closeModal={closeSafetyInfoModal} title={selectedMarker.content} />}
    </Root>
  );
};

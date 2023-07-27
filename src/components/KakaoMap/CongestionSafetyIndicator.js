import React from 'react';
import { CsContainer, CongestionBar, SafetyBar, Label } from './styled';

const CongestionSafetyIndicator = ({ congestion, safety }) => {
  const getPercentage = (value) => {
    return `${value}%`;
  };

  return (
    <CsContainer>
      <CongestionBar style={{ width: getPercentage(congestion) }} />
      <SafetyBar style={{ width: getPercentage(safety) }} />
      <Label>
        <div>Congestion: {congestion}%</div>
        <div>Safety: {safety}%</div>
      </Label>
    </CsContainer>
  );
};

export default CongestionSafetyIndicator;

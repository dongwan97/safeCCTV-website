import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

const Bar = styled.div`
  height: 20px;
  border-radius: 10px;
  flex: 1;
`;

const CongestionBar = styled(Bar)`
  background-color: #ff5252;
`;

const SafetyBar = styled(Bar)`
  background-color: #52ff52;
`;

const Label = styled.div`
  margin-left: 10px;
`;

const CongestionSafetyIndicator = ({ congestion, safety }) => {
  const getPercentage = (value) => {
    return `${value}%`;
  };

  return (
    <Container>
      <CongestionBar style={{ width: getPercentage(congestion) }} />
      <SafetyBar style={{ width: getPercentage(safety) }} />
      <Label>
        <div>Congestion: {congestion}%</div>
        <div>Safety: {safety}%</div>
      </Label>
    </Container>
  );
};

export default CongestionSafetyIndicator;

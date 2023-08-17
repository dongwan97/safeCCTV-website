import styled from 'styled-components';

export const Root = styled.div`
  font-family: Inter !important;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #191b20;
  color: #ffffff;
  box-sizing: border-box;
  padding: 30px 80px;
  max-height: 100vh;
`;

export const ResponsiveContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
export const DetailContainer = styled.div`
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 300px;
  background-color: #1f2127;
`;
export const Title = styled.p`
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
`;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  height: 300px;
`;
export const TopContainer = styled(Container)``;

export const SafetyContainer = styled(DetailContainer)`
  flex-basis: 300px;
  padding: 30px;
`;

export const DetailContainerTitle = styled.p`
  font-size: 27px;
  font-weight: 800;
  line-height: 33px;
  margin-bottom: 15px;
`;
export const SafetyCircle = styled.div`
  margin-top: 20px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%; //원이 되어야 함
  border: 25px solid #4441a7;
`;
export const SafetyStats = styled.p`
  font-size: 60px;
  font-weight: 800;
`;

export const SafetyGraphWrapper = styled(DetailContainer)`
  flex-basis: 700px;
  box-sizing: border-box;
  padding: 27px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const Graph = styled.div`
  background-color: brown;
  width: 100%;
  height: 100%;
`;
export const CenterContainer = styled(Container)``;
export const RegionSafetyContainer = styled(DetailContainer)`
  flex-basis: 300px;
  padding: 20px 27px;
`;
export const RegionSafetyTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`;
export const TableHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 9px 30px;
  &:first-child {
    background: #2a2c32;
  }
  border-bottom: 1px solid #4e4a4a;
`;
export const TableData = styled.p`
  &.red {
    background-color: #ff00001c;
  }
  &.blue {
    background-color: #0500ff1c;
  }
`;

export const MaxSpeedContainer = styled(DetailContainer)`
  flex-basis: content;
  text-align: center;
  padding: 50px 20px;
  white-space: nowrap;
`;

export const MaxSpeedTopTypo = styled.p`
  font-size: 27px;
  font-weight: 800;
`;
export const MaxSpeedCenterTypo = styled.p`
  margin-top: 14px;
  font-size: 60px;
  font-weight: 800;
  line-height: 73px;
`;
export const MaxSpeedRedTypo = styled.span`
  color: #f44444;
`;
export const MaxSpeedBottomTypo = styled.p`
  margin-top: 30px;
  font-size: 25px;
  font-weight: 800;
`;

export const RealtimeContainer = styled(DetailContainer)`
  padding: 45px 20px;
`;

export const BottomContainer = styled(Container)``;

export const RealtimeVehicleContainer = styled(DetailContainer)`
  padding: 27px 24px;
  flex-grow: 1;
`;

export const RealtimeWeatherContainer = styled(DetailContainer)`
  padding: 27px 14px;
`;

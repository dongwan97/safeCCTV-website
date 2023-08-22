import { useEffect, useState } from 'react';
import { ModalWrapper } from '../commonStyled';
import { Card } from './components/Card';
import { CardContainer } from './components/Card/styled';
import {
  BottomContainer,
  CenterContainer,
  Graph,
  GraphTitle,
  Root,
  SafetyCircle,
  SafetyContainer,
  DetailContainerTitle,
  SafetyGraphWrapper,
  SafetyStats,
  Title,
  TopContainer,
  RegionSafetyContainer,
  RegionSafetyTable,
  TableHeader,
  TableRow,
  TableData,
  TableDataTypo,
  MaxSpeedContainer,
  MaxSpeedTopTypo,
  MaxSpeedCenterTypo,
  MaxSpeedBottomTypo,
  MaxSpeedRedTypo,
  RealtimeContainer,
  RealtimeVehicleContainer,
  RealtimeWeatherContainer,
  ResponsiveContainer,
} from './styled';
import { findAccumulatedData } from 'api/hantech/findAccumulatedData';
import { findAllData } from 'api/hantech/findAllData';
import { findRealTimeData } from 'api/hantech/findRealTimeData';
import { nowTotal } from 'api/hantech/nowTotal';

export const SafetyInfoModal = ({ closeModal, title }) => {
  const [findRealTimeDataResponse, setFindRealTimeDataResponse] = useState();
  const [findAccumulateDataResponse, setFindAccumulateDataResponse] = useState();
  const [nowTotalResponse, setNowTotalResponse] = useState();

  const onClickRoot = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    findRealTimeData({ region: 'nokdong' }).then((res) => {
      console.log('findRealTimeDataResponse', res);
      setFindRealTimeDataResponse(res);
    });
    findAccumulatedData({ region: 'nokdong' }).then((res) => {
      console.log('findAccumulatedDataResponse', res);
      setFindAccumulateDataResponse(res);
    });
    nowTotal({ region: 'nokdong' }).then((res) => {
      console.log('nowTotalResponse', res);
      setNowTotalResponse(res);
    });
  }, []);
  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickRoot}>
        <Title>{title} Dashboard</Title>
        <ResponsiveContainer>
          <SafetyContainer>
            <DetailContainerTitle>오늘의 안전도</DetailContainerTitle>
            <SafetyCircle>
              <SafetyStats>30</SafetyStats>
            </SafetyCircle>
          </SafetyContainer>
          <SafetyGraphWrapper>
            <DetailContainerTitle>실시간 안전도 추이</DetailContainerTitle>
            <Graph>그래프</Graph>
          </SafetyGraphWrapper>
          <RegionSafetyContainer>
            <DetailContainerTitle>지역별 안전도 현황</DetailContainerTitle>
            <RegionSafetyTable>
              <TableRow>
                <TableHeader>지역명</TableHeader>
                <TableHeader>안전도</TableHeader>
              </TableRow>
              <TableRow>
                <TableData>광진구</TableData>
                <TableData className="red">red</TableData>
              </TableRow>
              <TableRow>
                <TableData>종로</TableData>
                <TableData className="blue">blue</TableData>
              </TableRow>
            </RegionSafetyTable>
          </RegionSafetyContainer>
          <MaxSpeedContainer>
            <MaxSpeedTopTypo>현재까지의 최고속도는</MaxSpeedTopTypo>
            <MaxSpeedCenterTypo>
              <MaxSpeedRedTypo>{nowTotalResponse?.todayMax}</MaxSpeedRedTypo>km
            </MaxSpeedCenterTypo>
            <MaxSpeedBottomTypo>
              어제의 최고속도는 100km 이며
              <br />
              오늘보다 낮습니다
            </MaxSpeedBottomTypo>
          </MaxSpeedContainer>
          <RealtimeContainer>
            <DetailContainerTitle>실시간 차량 및 보행자</DetailContainerTitle>
            <CardContainer>
              <Card title="현재 보행자 수" count={findRealTimeDataResponse?.peopleCount} />
              <Card title="누적 보행자 수" count={nowTotalResponse?.peopleTotal} />
              <Card title="현재 챠량 대수" count={findRealTimeDataResponse?.carCount} />
              <Card title="누적 챠량 대수" count={nowTotalResponse?.carTotal} />
            </CardContainer>
          </RealtimeContainer>
          <RealtimeVehicleContainer>
            <DetailContainerTitle>실시간 차량 현황</DetailContainerTitle>
          </RealtimeVehicleContainer>
          <RealtimeWeatherContainer>
            <DetailContainerTitle>실시간 기상 상태</DetailContainerTitle>
          </RealtimeWeatherContainer>
        </ResponsiveContainer>
      </Root>
    </ModalWrapper>
  );
};

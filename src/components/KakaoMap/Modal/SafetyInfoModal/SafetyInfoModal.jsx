import { useEffect, useState } from 'react';
import { ModalWrapper } from '../commonStyled';
import { Card } from './components/Card';

import {
  Root,
  SafetyCircle,
  SafetyContainer,
  DetailContainerTitle,
  SafetyGraphWrapper,
  SafetyStats,
  Title,
  RegionSafetyContainer,
  RegionSafetyTable,
  TableHeader,
  TableRow,
  TableData,
  MaxSpeedContainer,
  MaxSpeedTopTypo,
  MaxSpeedCenterTypo,
  MaxSpeedBottomTypo,
  MaxSpeedRedTypo,
  RealtimeContainer,
  RealtimeVehicleContainer,
  RealtimeWeatherContainer,
  ResponsiveContainer,
  Graph,
  LeftCardContainer,
  RightCardContainer,
} from './styled';
import { findAccumulatedData } from 'api/hantech/findAccumulatedData';
import { findRealTimeData } from 'api/hantech/findRealTimeData';
import { nowTotal } from 'api/hantech/nowTotal';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import { CardContainer } from 'components/KakaoMap/styled';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTitle, Tooltip, Legend);

export const SafetyInfoModal = ({ closeModal, title, region }) => {
  const [findRealTimeDataResponse, setFindRealTimeDataResponse] = useState();
  const [findAccumulateDataResponse, setFindAccumulateDataResponse] = useState();
  const [nowTotalResponse, setNowTotalResponse] = useState();
  const [labels, setLabels] = useState([]); //x축
  const onClickRoot = (e) => {
    e.stopPropagation();
  };
  const options1 = {
    maintainAspectRatio: true,
    responsive: true,

    plugins: {},
    font: {
      size: 10,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };
  const options2 = {
    maintainAspectRatio: true,
    responsive: true,

    plugins: {},
    font: {
      size: 10,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 15,
        },
      },
    },
  };

  const defaultData = {
    text: '실시간 차량 현황',
    labels,
    datasets: [
      {
        label: '',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const [chart1Data, setChart1Data] = useState(defaultData);
  const [chart2Data, setChart2Data] = useState(defaultData);

  useEffect(() => {
    findRealTimeData({ region: region }).then((res) => {
      console.log('findRealTimeDataResponse', res);
      setFindRealTimeDataResponse(res);
    });
    findAccumulatedData({ region: region }).then((res) => {
      console.log('findAccumulatedDataResponse', res);
      setFindAccumulateDataResponse(res);
    });
    nowTotal({ region: region }).then((res) => {
      console.log('nowTotalResponse', res);
      setNowTotalResponse(res);
    });
  }, []);

  useEffect(() => {
    if (!findAccumulateDataResponse) return;
    setLabels(findAccumulateDataResponse.map((data) => data.time.slice(0, 5)));
  }, [findAccumulateDataResponse]);

  useEffect(() => {
    if (!findAccumulateDataResponse) return;
    setChart1Data({
      labels,
      datasets: [
        {
          label: '실시간 안전도',
          data: findAccumulateDataResponse.map((data) => data.safety),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    });
    setChart2Data({
      labels,
      datasets: [
        {
          label: '차량 평균 속도',
          data: findAccumulateDataResponse.map((data) => data.carSpeedMean),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: '차량 최대 속도',
          data: findAccumulateDataResponse.map((data) => data.carSpeedMax),
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
          label: '차량 대수',
          data: findAccumulateDataResponse.map((data) => data.carCount),
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
        },
      ],
    });
  }, [labels]);

  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickRoot}>
        <Title>{title}</Title>
        <ResponsiveContainer>
          <SafetyContainer>
            <DetailContainerTitle>오늘의 안전도</DetailContainerTitle>
            <SafetyCircle>
              <SafetyStats>{findRealTimeDataResponse?.safety}</SafetyStats>
            </SafetyCircle>
          </SafetyContainer>
          <SafetyGraphWrapper>
            <DetailContainerTitle>실시간 안전도</DetailContainerTitle>
            <Line options={options1} data={chart1Data} />
          </SafetyGraphWrapper>
          {/* <RegionSafetyContainer>
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
          </RegionSafetyContainer> */}
          <MaxSpeedContainer>
            <MaxSpeedTopTypo>현재까지의 최고속도는</MaxSpeedTopTypo>
            <MaxSpeedCenterTypo>
              <MaxSpeedRedTypo>{nowTotalResponse?.todayMax}</MaxSpeedRedTypo>km
            </MaxSpeedCenterTypo>
            <MaxSpeedBottomTypo>
              어제의 최고속도는 <br />
              100km 이며
              <br />
              오늘보다 낮습니다
            </MaxSpeedBottomTypo>
          </MaxSpeedContainer>
          <RealtimeVehicleContainer>
            <DetailContainerTitle>실시간 차량 현황</DetailContainerTitle>
            <Line options={options2} data={chart2Data} style={{ width: '80%' }} />
          </RealtimeVehicleContainer>
          <RealtimeContainer>
            <DetailContainerTitle>실시간 차량 및 보행자</DetailContainerTitle>
            <CardContainer>
              <LeftCardContainer>
                <Card title="현재 보행자 수" count={findRealTimeDataResponse?.peopleCount} />
                <Card title="누적 보행자 수" count={nowTotalResponse?.peopleTotal} />
              </LeftCardContainer>
              <RightCardContainer>
                <Card title="현재 챠량 대수" count={findRealTimeDataResponse?.carCount} />
                <Card title="누적 챠량 대수" count={nowTotalResponse?.carTotal} />
              </RightCardContainer>
            </CardContainer>
          </RealtimeContainer>

          {/* <RealtimeWeatherContainer>
            <DetailContainerTitle>실시간 기상 상태</DetailContainerTitle>
          </RealtimeWeatherContainer> */}
        </ResponsiveContainer>
      </Root>
    </ModalWrapper>
  );
};

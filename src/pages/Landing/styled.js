import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Root = styled.div``;
export const TitleTypo = styled.p`
  /* font-weight: ; */
`;

export const Car1 = styled.img`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  z-index: -2;
`;

export const LandingContainer = styled.div`
  position: relative;
  z-index: 1;
  top: 0px;
  left: 0px;
  margin: 0px;
`;

export const TopTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  width: 100vw;
  height: 100vh;
`;

export const TopTypoMain = styled.p`
  color: white;
  font-size: 50px;
  font-weight: bold;
`;
export const TopTypoText = styled.p`
  color: white;
`;

export const SecondContainer = styled.div`
  display: flex;
  background-color: white;
`;

export const Crossboard1 = styled.img`
  width: 610px;
`;

export const SecondTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 70%;

  text-align: center;
`;

export const SecondTypoFirst = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const SecondTypoSecond = styled.p`
  font-size: 15px;
`;

export const ThirdContainer = styled.div`
  position: relative;
  background-color: #f9fafd;
  color: aliceblue;
  padding: 200px 300px;
`;

export const ThirdTypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;

export const ThirdTypoTop = styled.p`
  position: relative;
  font-size: 27px;
  font-weight: bold;
  color: orange;
  margin-bottom: 13px;
`;

export const ThirdTypoText = styled.p`
  font-size: 23px;
  text-align: center;
  color: black;
  font-weight: bold;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 0px;
`;
export const ServicesRow = styled.div`
  display: flex;
  gap: 200px;
  padding-top: 50px;
`;

export const motionService = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};

export const serviceImgAnimation = {
  hoverImg: { scale: 1.1 },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  },
};

export const Service = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 370px;
  border-radius: 0%;
`;
export const ServiceImg = styled(motion.img)`
  width: 50%;
`;
export const ServiceImgCar = styled(motion.img)`
  width: 31%;
`;
export const ServiceTypo = styled.p`
  color: black;
  font-size: 20px;
  color: rgb(107, 118, 132);
`;
export const ServiceTypoTop = styled.p`
  color: black;
  font-size: 23px;
  font-weight: bold;
`;

export const ContactContainer = styled.div`
  background-color: dimgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const ContactTitle = styled(motion.p)`
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

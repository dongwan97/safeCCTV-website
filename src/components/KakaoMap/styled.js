import styled from 'styled-components';

export const Root = styled.div`
  border: 1px solid green;
`;

export const SmallModalOverlay = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
`;

export const SmallModalContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(0%, 0);
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: ${({ isSmallModalOpen }) => (isSmallModalOpen ? 'block' : 'none')};
`;

export const BigModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const BigModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  margin-top: 10px;
`;

export const CsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

export const Bar = styled.div`
  height: 20px;
  border-radius: 10px;
  flex: 1;
`;

export const CongestionBar = styled(Bar)`
  background-color: #ff5252;
`;

export const SafetyBar = styled(Bar)`
  background-color: #52ff52;
`;

export const Label = styled.div`
  margin-left: 10px;
`;

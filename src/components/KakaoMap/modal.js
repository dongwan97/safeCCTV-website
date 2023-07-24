import React, { useState } from 'react';
import styled from 'styled-components';

const SmallModalOverlay = styled.div`
  display: inline-block;
  position: relative;
`;

const SmallModalContent = styled.div`
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

const BigModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  margin-top: 10px;
`;

const SmallModal = ({ content, onOpenBigModal, children }) => {
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSmallModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSmallModalOpen(false);
  };

  return (
    <SmallModalOverlay onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>{content}</div>
      <SmallModalContent isSmallModalOpen={isSmallModalOpen}>
        <Button onClick={onOpenBigModal}>Details</Button>

        {children}
      </SmallModalContent>
    </SmallModalOverlay>
  );
};

const BigModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <BigModalOverlay>
      <BigModalContent>
        <Button onClick={onClose}>Close</Button>
        {children}
      </BigModalContent>
    </BigModalOverlay>
  );
};

export { SmallModal, BigModal };

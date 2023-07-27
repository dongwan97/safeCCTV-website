import React, { useState } from 'react';
import { SmallModalContent, SmallModalOverlay, BigModalContent, BigModalOverlay, Button } from './styled';
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

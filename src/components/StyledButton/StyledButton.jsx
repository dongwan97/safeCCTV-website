import { useState } from 'react';
import { BulletinImg, Root } from './styled';
import bulletinImg from 'assets/images/bulletin.png';
import HoveredBulletinImg from 'assets/images/bulletin_hover.png';
export const StyledButton = ({ onClickStyledButton, width, height, children }) => {
  const style = {
    width: width + 'px',
    height: height + 'px',
  };
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    console.log('Enter');
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Root onClick={onClickStyledButton} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style && style}>
      <BulletinImg src={isHovered ? HoveredBulletinImg : bulletinImg} alt="bulletin_img" />
      {children}
    </Root>
  );
};

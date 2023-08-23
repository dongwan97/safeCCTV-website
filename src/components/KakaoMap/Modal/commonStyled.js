import { StyledButton } from 'components/StyledButton/StyledButton';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
 from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
`;

const fadeOut = keyframes`
 from {
      opacity: 0.8;
    }
    to {
      opacity: 0;
    }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #222222;
  z-index: 5;
  animation-name: ${(props) =>
    props.isOpen
      ? css`
          ${fadeIn}
        `
      : css`
          ${fadeOut}
        `};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
`;

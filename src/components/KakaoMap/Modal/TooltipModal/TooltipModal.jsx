import { ModalWrapper } from '../commonStyled';
import { Root } from './styled';

export const TooltipModal = ({ openTooltipModal, openSafetyInfoModal }) => {
  return (
    <Root
      onMouseEnter={() => {
        openTooltipModal();
      }}
    >
      TooltipModal
      <button onClick={openSafetyInfoModal}>openSafetyInfoModal</button>
    </Root>
  );
};

import { Modal as MuiModal } from '@mui/material';
import React from 'react';
import { StyledContainer } from './styledUtils';
export interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  onClose?: () => void;
}

const Modal = ({ children, isModalOpen, onClose }: ModalProps) => {
  return (
    <div data-testid="modal-container">
      <MuiModal open={isModalOpen} onClose={onClose} data-testid="modal">
        <StyledContainer data-testid="modal-content">{children}</StyledContainer>
      </MuiModal>
    </div>
  );
};
export default Modal;

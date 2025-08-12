import { useContext } from 'react';
import InfoContext from './store/InfoContext';
import Modal from './Modal';

export default function InfoModal() {
  const infoCtx = useContext(InfoContext);

  const handleCloseModal = () => {
    infoCtx.closeModal();
  };
  return (
    <Modal open={infoCtx.isOpen}>
      <button className="info-modal_close-button" onClick={handleCloseModal}>
        X
      </button>
    </Modal>
  );
}

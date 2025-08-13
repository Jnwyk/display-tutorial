import { useContext } from 'react';
import InfoContext from './store/InfoContext';
import Modal from './Modal';
import { properties } from '../data/properties.json';

export default function InfoModal() {
  const infoCtx = useContext(InfoContext);
  const currentProperty = properties.find(
    (property) => property.property === infoCtx.openedProperty
  );

  const handleCloseModal = () => {
    infoCtx.closeModal();
  };

  return (
    <Modal open={infoCtx.isOpen}>
      <h3 className="info-modal_title">
        {infoCtx.openedProperty ? currentProperty.property : ''}
      </h3>
      <p className="description">
        {infoCtx.openedProperty ? currentProperty.description : ''}
      </p>
      <button className="info-modal_close-button" onClick={handleCloseModal}>
        X
      </button>
    </Modal>
  );
}

import { createContext, useState } from 'react';

const InfoContext = createContext({
  isOpen: false,
  openedProperty: undefined,
  selectProperty: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export function InfoContextProvider({ children }) {
  const [opened, setOpened] = useState(false);
  const [property, setProperty] = useState('');

  function selectProperty(property) {
    setProperty(property);
  }

  function openModal() {
    setOpened(true);
  }

  function closeModal() {
    setOpened(false);
  }

  const infoCtx = {
    isOpen: opened,
    openedProperty: property,
    selectProperty,
    openModal,
    closeModal,
  };

  return (
    <InfoContext.Provider value={infoCtx}>{children}</InfoContext.Provider>
  );
}
export default InfoContext;

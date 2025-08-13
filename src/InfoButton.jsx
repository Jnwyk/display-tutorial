import { useContext } from 'react';
import InfoContext from './store/InfoContext';
import { FiInfo } from 'react-icons/fi';

export default function InfoButton({ property }) {
  const infoCtx = useContext(InfoContext);

  const onButtonClick = () => {
    infoCtx.selectProperty(property);
    infoCtx.openModal();
  };

  return <FiInfo className="info-button" onClick={onButtonClick} />;
}

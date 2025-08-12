import { useContext } from 'react';
import InfoContext from './store/InfoContext';

export default function InfoButton({ property }) {
  const infoCtx = useContext(InfoContext);

  const onButtonClick = () => {
    console.log(property);
    infoCtx.selectProperty(property);
    infoCtx.openModal();
  };

  return <button onClick={onButtonClick}>TEST</button>;
}

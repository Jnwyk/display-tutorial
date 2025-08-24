import { useState, useRef, useEffect } from 'react';
import useChangeProperty from './hooks/useChangeProperty';
import BlockContainer from './BlockContainer';
import ContainerProperties from './ContainerProperties';
import ChildProperties from './ChildProperties';
import FlexboxModule from './FlexboxModule';
import ContainerWidth from './ContainerWidth';
import InfoModal from './InfoModal';
import { InfoContextProvider } from './store/InfoContext';
import { blockArray } from '../data/blockArray';

export default function App() {
  const [displayContainerWidth, setDisplayContainerWidth] = useState(null);
  const [initialWidth, setInitialWidth] = useState(null);
  const [displayFlexGrow, setDisplayFlexGrow] = useState(1);
  const displayRef = useRef(null);
  const [flexboxProperties, flexboxChildProperties, setChangeProperty] =
    useChangeProperty(null, null, null);

  useEffect(() => {
    if (displayRef.current) {
      setInitialWidth(displayRef.current.offsetWidth);
    }
  }, []);

  const handleWidthChange = (newWidth) => {
    setDisplayContainerWidth(newWidth);
    setDisplayFlexGrow(0);
  };
  return (
    <InfoContextProvider>
      <div className="general__container">
        <div className="properties__container">
          <FlexboxModule handleOnPropertyValueChange={setChangeProperty} />
          {displayRef.current && (
            <ContainerWidth
              handleSliderChange={handleWidthChange}
              maxDisplayWidth={initialWidth}
            />
          )}
          <ContainerProperties
            handleOnPropertyValueChange={setChangeProperty}
          />
          <ChildProperties
            handleOnPropertyValueChange={setChangeProperty}
            childStyling={flexboxChildProperties}
          />
        </div>
        <BlockContainer
          displayContainerRef={displayRef}
          displayFlexGrow={displayFlexGrow}
          flexboxContainerProperties={flexboxProperties}
          flexboxChildProperties={flexboxChildProperties}
          numberArray={blockArray}
          handleOnPropertyValueChange={setChangeProperty}
          containerWidth={displayContainerWidth}
        />
      </div>
      <InfoModal />
    </InfoContextProvider>
  );
}

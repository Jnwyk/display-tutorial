import { useState, useRef, useEffect } from 'react';
import BlockContainer from './BlockContainer';
import ContainerProperties from './ContainerProperties';
import ChildProperties from './ChildProperties';
import FlexboxModule from './FlexboxModule';
import ContainerWidth from './ContainerWidth';
import { InfoContextProvider } from './store/InfoContext';
import InfoModal from './InfoModal';

const numberArray = [1, 2, 3, 4];

export default function App() {
  const [flexboxProperties, setFlexboxProperties] = useState({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'flex-direction',
  });
  const [flexboxChildProperties, setFlexboxChildProperties] = useState({
    order: numberArray[0] - 1,
    flexGrow: 0,
    flexBasis: '1%',
    flexShrink: 1,
  });
  const [displayContainerWidth, setDisplayContainerWidth] = useState(null);
  const [initialWidth, setInitialWidth] = useState(null);
  const [displayFlexGrow, setDisplayFlexGrow] = useState(1);
  const displayRef = useRef(null);

  useEffect(() => {
    if (displayRef.current) {
      setInitialWidth(displayRef.current.offsetWidth);
    }
  }, []);

  const handlePropertyValueChange = (property, value) => {
    switch (property) {
      case 'display':
        setFlexboxProperties((prevValue) => {
          if (prevValue.display === 'flex')
            return { ...prevValue, display: 'block' };
          else return { ...prevValue, display: 'flex' };
        });
        break;
      case 'flex-direction':
        setFlexboxProperties((prevValue) => ({
          ...prevValue,
          flexDirection: value,
        }));
        break;
      case 'justify-content':
        setFlexboxProperties((prevValue) => ({
          ...prevValue,
          justifyContent: value,
        }));
        break;
      case 'align-items':
        setFlexboxProperties((prevValue) => ({
          ...prevValue,
          alignItems: value,
        }));
        break;
      case 'flex-wrap':
        setFlexboxProperties((prevValue) => ({
          ...prevValue,
          flexWrap: value,
        }));
        break;
    }
  };

  const handleChildPropertyValueChange = (property, value) => {
    switch (property) {
      case 'order':
        setFlexboxChildProperties((prevValue) => ({
          ...prevValue,
          order: value,
        }));
        break;
      case 'flex-grow':
        setFlexboxChildProperties((prevValue) => ({
          ...prevValue,
          flexGrow: value,
        }));
        break;
      case 'flex-basis':
        setFlexboxChildProperties((prevValue) => ({
          ...prevValue,
          flexBasis: value,
        }));
        break;
      case 'flex-shrink':
        if (value >= 0) {
          setFlexboxChildProperties((prevValue) => ({
            ...prevValue,
            flexShrink: value,
          }));
        }
        break;
    }
  };

  const handleWidthChange = (newWidth) => {
    setDisplayContainerWidth(newWidth);
    setDisplayFlexGrow(0);
  };

  return (
    <InfoContextProvider>
      <div className="general__container">
        <div className="properties__container">
          <FlexboxModule
            handleOnPropertyValueChange={handlePropertyValueChange}
          />
          {displayRef.current && (
            <ContainerWidth
              handleSliderChange={handleWidthChange}
              maxDisplayWidth={initialWidth}
            />
          )}
          <ContainerProperties
            handleOnPropertyValueChange={handlePropertyValueChange}
          />
          <ChildProperties
            handleOnPropertyValueChange={handleChildPropertyValueChange}
            childStyling={flexboxChildProperties}
          />
        </div>
        <BlockContainer
          displayContainerRef={displayRef}
          displayFlexGrow={displayFlexGrow}
          flexboxContainerProperties={flexboxProperties}
          flexboxChildProperties={flexboxChildProperties}
          numberArray={numberArray}
          handleOnPropertyValueChange={handleChildPropertyValueChange}
          containerWidth={displayContainerWidth}
        />
      </div>
      <InfoModal />
    </InfoContextProvider>
  );
}

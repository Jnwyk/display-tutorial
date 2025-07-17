import { useState } from 'react';
import BlockContainer from './BlockContainer';
import ContainerProperties from './ContainerProperties';
import ChildProperties from './ChildProperties';
import FlexboxModule from './FlexboxModule';

const numberArray = [1, 2, 3, 4];

export default function App() {
  const [flexboxProperties, setFlexboxProperties] = useState({
    display: 'block',
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

  return (
    <div className="general__container">
      <div className="properties__container">
        <FlexboxModule
          handleOnPropertyValueChange={handlePropertyValueChange}
        />
        <ContainerProperties
          handleOnPropertyValueChange={handlePropertyValueChange}
        />
        <ChildProperties
          handleOnPropertyValueChange={handleChildPropertyValueChange}
          childStyling={flexboxChildProperties}
        />
      </div>
      <BlockContainer
        flexboxContainerProperties={flexboxProperties}
        flexboxChildProperties={flexboxChildProperties}
        numberArray={numberArray}
        handleOnPropertyValueChange={handleChildPropertyValueChange}
      />
    </div>
  );
}

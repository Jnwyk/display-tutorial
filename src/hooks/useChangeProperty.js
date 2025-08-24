import { useState } from 'react';
import { blockArray } from '../../data/blockArray';

export default function useChangeProperty() {
  const [flexboxProperties, setFlexboxProperties] = useState({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'flex-direction',
  });
  const [flexboxChildProperties, setFlexboxChildProperties] = useState({
    order: blockArray[0] - 1,
    flexGrow: 0,
    flexBasis: '1%',
    flexShrink: 1,
  });

  const handlePropertyChange = (element, property, value) => {
    if (element === 'parent') {
      changePropertyValue(property, value);
    } else if (element === 'child') {
      changeChildPropertyValue(property, value);
    }
  };

  function changePropertyValue(property, value) {
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
  }

  function changeChildPropertyValue(property, value) {
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
          flexBasis: value + 'px',
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
  }

  return [flexboxProperties, flexboxChildProperties, handlePropertyChange];
}

import { useEffect, useState } from 'react';
import InfoButton from './InfoButton';

export default function Selector({
  cssProperty,
  cssPropertyValues,
  handleOnPropertyValueChange,
}) {
  const [isButtonActive, setIsButtonActive] = useState(0);

  const handleButtonClick = (property, buttonIndex) => {
    handleOnPropertyValueChange(cssProperty, property);
    setIsButtonActive(buttonIndex);
  };

  return (
    <div className="property_container">
      <p>{cssProperty}</p>
      <InfoButton property={cssProperty} />
      {cssPropertyValues.map((property, i) => {
        return (
          <button
            className={
              isButtonActive === i
                ? 'selector_button_active'
                : 'selector_button'
            }
            key={property}
            onClick={() => handleButtonClick(property, i)}
          >
            {property}
          </button>
        );
      })}
    </div>
  );
}

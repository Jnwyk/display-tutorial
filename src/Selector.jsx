import { useEffect, useState } from 'react';

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

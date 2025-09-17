import { useState } from 'react';

export default function Input({
  className = '',
  startingValue,
  maxValue,
  property,
  handleOnBlur,
  unit,
}) {
  const [widthValue, setWidthValue] = useState(startingValue);

  const handleOnChange = (newWidth) => {
    if (!isNaN(newWidth) && newWidth < maxValue) setWidthValue(() => newWidth);
  };

  return (
    <div className="input__container">
      <input
        name={property}
        className={`input ${className}`}
        onBlur={() => handleOnBlur('child', property, widthValue)}
        onChange={(e) => handleOnChange(e.target.value)}
        value={widthValue}
      />
      <span className="input_unit">{unit}</span>
    </div>
  );
}

import { useState } from 'react';

export default function Input({
  className = '',
  startingValue,
  property,
  handleOnBlur,
}) {
  const [widthValue, setWidthValue] = useState(startingValue);

  const handleOnChange = (newWidth) => {
    if (!isNaN(newWidth) && newWidth < 1500) setWidthValue(() => newWidth);
  };
  return (
    <input
      name={property}
      className={`input ${className}`}
      onBlur={() => handleOnBlur('child', property, widthValue)}
      onChange={(e) => handleOnChange(e.target.value)}
      value={widthValue || ''}
    />
  );
}

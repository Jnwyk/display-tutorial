import { useState } from 'react';

export default function Input({
  className,
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
      className={`input ${className}`}
      onBlur={() => handleOnBlur(property, widthValue)}
      onChange={(e) => handleOnChange(e.target.value)}
      value={widthValue || ''}
    />
  );
}

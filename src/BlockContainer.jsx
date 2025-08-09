import { useState } from 'react';
import Block from './Block';

export default function BlockContainer({
  flexboxContainerProperties,
  flexboxChildProperties,
  numberArray,
  handleOnPropertyValueChange,
  containerWidth,
  displayContainerRef,
  displayFlexGrow,
}) {
  const [activeRectangle, setActiveRectangle] = useState(1);

  const handleRectangleOnClick = (number) => {
    setActiveRectangle(number);
    handleOnPropertyValueChange('order', number - 1);
  };
  return (
    <div
      ref={displayContainerRef}
      className="display__container"
      style={{
        display: flexboxContainerProperties.display,
        flexDirection: flexboxContainerProperties.flexDirection,
        justifyContent: flexboxContainerProperties.justifyContent,
        alignItems: flexboxContainerProperties.alignItems,
        flexWrap: flexboxContainerProperties.flexWrap,
        width: containerWidth + 'px',
        flexGrow: displayFlexGrow,
      }}
    >
      {numberArray.map((block) => (
        <Block
          key={block}
          number={block}
          isActive={activeRectangle === block ? true : false}
          styling={flexboxChildProperties}
          handleRectangleOnClick={handleRectangleOnClick}
        />
      ))}
    </div>
  );
}

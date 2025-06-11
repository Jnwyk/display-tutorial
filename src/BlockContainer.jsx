import { useState } from 'react';
import Block from './Block';

const numberArray = [1, 2, 3, 4];

export default function BlockContainer({
  flexboxContainerProperties,
  flexboxChildProperties,
}) {
  const [activeRectangle, setActiveRectangle] = useState(1);

  const handleRectangleOnClick = (number) => {
    setActiveRectangle(number);
  };

  return (
    <div
      className="display__container"
      style={{
        display: flexboxContainerProperties.display,
        flexDirection: flexboxContainerProperties.flexDirection,
        justifyContent: flexboxContainerProperties.justifyContent,
        alignItems: flexboxContainerProperties.alignItems,
        flexWrap: flexboxContainerProperties.flexWrap,
      }}
    >
      {numberArray.map((block) => (
        <Block
          key={Math.random()}
          number={block}
          isActive={activeRectangle === block ? true : false}
          styling={flexboxChildProperties}
          handleRectangleOnClick={handleRectangleOnClick}
        />
      ))}
    </div>
  );
}

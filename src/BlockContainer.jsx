import { useState } from 'react';
import Block from './Block';

const numberArray = [1, 2, 3, 4, 5, 6, 7];

export default function BlockContainer({ flexboxContainerProperties, flexboxChildrenProperties }) {
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
          rectangleStyle={flexboxChildrenProperties}
          handleRectangleOnClick={handleRectangleOnClick}
        />
      ))}
    </div>
  );
}

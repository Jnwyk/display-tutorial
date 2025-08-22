import { useEffect, useRef, useState } from 'react';

export default function Block({
  number,
  isActive,
  handleRectangleOnClick,
  styling,
}) {
  const [cssClass, setCssClass] = useState('block__container');
  const firstRender = useRef(true);

  useEffect(() => {
    const baseClass = 'block__container';
    if (firstRender.current) {
      setCssClass(isActive ? `${baseClass} active no-transition` : baseClass);
      firstRender.current = false;
    } else {
      requestAnimationFrame(() => {
        setCssClass(isActive ? `${baseClass} active` : baseClass);
      });
    }
  }, [isActive]);

  const inlineStyle = isActive
    ? {
        flexGrow: styling.flexGrow,
        order: styling.order,
        flexBasis: styling.flexBasis,
        flexShrink: styling.flexShrink,
      }
    : { order: number - 1 };

  return (
    <div
      className={cssClass}
      style={inlineStyle}
      onClick={() => handleRectangleOnClick(number)}
    >
      {number}
    </div>
  );
}

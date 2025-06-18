export default function Block({
  number,
  isActive,
  handleRectangleOnClick,
  styling,
}) {
  const cssClass =
    isActive === true ? 'block__container active' : 'block__container';

  const inlineStyle = () => {
    if (isActive === true) {
      return {
        flexGrow: styling.flexGrow,
        order: styling.order,
        flexBasis: styling.flexBasis,
        flexShrink: styling.flexShrink
      };
    } else
      return {
        order: number - 1,
      };
  };

  return (
    <div
      className={cssClass}
      style={inlineStyle()}
      onClick={() => handleRectangleOnClick(number)}
    >
      {number}
    </div>
  );
}

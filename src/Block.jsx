export default function Block({ number, isActive, handleRectangleOnClick }) {
  const cssClass =
    isActive === true ? 'block__container active' : 'block__container';

  return (
    <div className={cssClass} onClick={() => handleRectangleOnClick(number)}>
      {number}
    </div>
  );
}

export default function SwiftButton({
  property,
  currentValue,
  handleOnSwiftButtonChange,
}) {
  return (
    <div>
      <button
        onClick={() => handleOnSwiftButtonChange(property, currentValue - 1)}
      >
        {'<'}
      </button>
      <p>{currentValue}</p>
      <button
        onClick={() => handleOnSwiftButtonChange(property, currentValue + 1)}
      >
        {'>'}
      </button>
    </div>
  );
}

export default function SwiftButton({
  property,
  currentValue,
  handleOnSwiftButtonChange,
}) {
  return (
    <div className="swift_container">
      <button
        className="swift_button"
        onClick={() =>
          handleOnSwiftButtonChange('child', property, currentValue - 1)
        }
      >
        {'<'}
      </button>
      <p className="swift_value">{currentValue}</p>
      <button
        className="swift_button"
        onClick={() =>
          handleOnSwiftButtonChange('child', property, currentValue + 1)
        }
      >
        {'>'}
      </button>
    </div>
  );
}

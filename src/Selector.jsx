export default function Selector({
  cssProperty,
  cssPropertyValues,
  handleOnPropertyValueChange,
}) {
  return (
    <div className="property_container">
      <p>{cssProperty}</p>
      {cssPropertyValues.map((property) => {
        return (
          <button
            className="selector_button"
            key={property}
            onClick={() => handleOnPropertyValueChange(cssProperty, property)}
          >
            {property}
          </button>
        );
      })}
    </div>
  );
}

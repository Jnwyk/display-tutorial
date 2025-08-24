import InfoButton from './InfoButton';

export default function ChildProperty({ children, propertyName }) {
  return (
    <div className="property_container child-properties">
      <div>
        <span className="property_label">{propertyName}</span>
        <InfoButton property={propertyName} />
      </div>
      <div>{children}</div>
    </div>
  );
}

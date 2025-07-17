export default function RadioInput({
  name,
  label,
  checked,
  value,
  onRadioInputChange,
}) {
  return (
    <div>
      <input
        className="radio_input"
        type="radio"
        name={name}
        checked={checked == value}
        onChange={() => onRadioInputChange(value)}
      />
      <label className="radio_label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

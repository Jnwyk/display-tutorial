export default function RadioInput({
  name,
  label,
  checked,
  value,
  onRadioInputChange,
}) {
  return (
    <>
      <input
        type="radio"
        name={name}
        checked={checked == value}
        onChange={() => onRadioInputChange(value)}
      />
      <label htmlFor={name}>{label}</label>
    </>
  );
}

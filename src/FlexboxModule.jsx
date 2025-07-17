export default function FlexboxModule({ handleOnPropertyValueChange }) {
  return (
    <div className="flexbox__container">
      <label className="flexbox_label" htmlFor="flexbox">
        Flexbox property:
      </label>
      <input
        className="flexbox_input"
        type="checkbox"
        name="flexbox"
        onChange={() => handleOnPropertyValueChange('display', 'flex')}
      />
    </div>
  );
}

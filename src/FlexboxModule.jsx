import { useState } from 'react';

export default function FlexboxModule({ handleOnPropertyValueChange }) {
  const [checkBoxActive, setCheckboxActive] = useState(true);

  const handleInputChange = () => {
    setCheckboxActive((prev) => !prev);
    handleOnPropertyValueChange('parent', 'display', 'flex');
  };
  return (
    <div className="flexbox__container">
      <label className="flexbox_label" htmlFor="flexbox">
        Flexbox property:
      </label>
      <input
        className="flexbox_input"
        type="checkbox"
        name="flexbox"
        checked={checkBoxActive}
        onChange={() => handleInputChange()}
      />
    </div>
  );
}

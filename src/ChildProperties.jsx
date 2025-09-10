import { useState } from 'react';
import RadioInput from './RadioInput';
import SwiftButton from './SwiftButton';
import ChildProperty from './ChildProperty';
import Input from './Input';

export default function ChildProperties({
  handleOnPropertyValueChange,
  childStyling,
}) {
  const [checkedRadioInput, setCheckedRadioInput] = useState('0');

  const handlleRadioInputChange = (value) => {
    setCheckedRadioInput(value);
    handleOnPropertyValueChange('child', 'flex-grow', value);
  };

  return (
    <div className="container_properties__container child">
      <div className="container_properties__row">
        <ChildProperty propertyName="order">
          <SwiftButton
            property="order"
            currentValue={childStyling.order}
            handleOnSwiftButtonChange={handleOnPropertyValueChange}
          />
        </ChildProperty>
        <ChildProperty propertyName="flex-grow">
          <div className="radio_container" name="flex-grow">
            <RadioInput
              name={'flex-grow'}
              label={0}
              value={0}
              checked={checkedRadioInput}
              onRadioInputChange={handlleRadioInputChange}
            />
            <RadioInput
              name={'flex-grow'}
              label={1}
              value={1}
              checked={checkedRadioInput}
              onRadioInputChange={handlleRadioInputChange}
            />
          </div>
        </ChildProperty>
      </div>
      <div className="container_properties__row">
        <ChildProperty propertyName="flex-shrink">
          <SwiftButton
            property="flex-shrink"
            currentValue={childStyling.flexShrink}
            handleOnSwiftButtonChange={handleOnPropertyValueChange}
          />
        </ChildProperty>
        <ChildProperty propertyName="flex-basis">
          <div className="input__container">
            <Input
              property="flex-basis"
              placeholder="Enter value..."
              value={100}
              handleOnBlur={handleOnPropertyValueChange}
            />
            <span className="input_unit">px</span>
          </div>
        </ChildProperty>
      </div>
    </div>
  );
}

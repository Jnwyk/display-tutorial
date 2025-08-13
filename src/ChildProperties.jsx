import { useState } from 'react';
import RadioInput from './RadioInput';
import SwiftButton from './SwiftButton';
import InfoButton from './InfoButton';

export default function ChildProperties({
  handleOnPropertyValueChange,
  childStyling,
}) {
  const [checkedRadioInput, setCheckedRadioInput] = useState('0');

  const handlleRadioInputChange = (value) => {
    setCheckedRadioInput(value);
    handleOnPropertyValueChange('flex-grow', value);
  };

  return (
    <div className="container_properties__container">
      <div className="property_container">
        <p className="property_label">order</p>
        <InfoButton property="order" />
        <SwiftButton
          property="order"
          currentValue={childStyling.order}
          handleOnSwiftButtonChange={handleOnPropertyValueChange}
        />
      </div>
      <div className="property_container">
        <p className="property_label">flex-grow</p>
        <InfoButton property="flex-grow" />
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
      </div>
      <div className="property_container">
        <p className="property_label">flex-shrink</p>
        <InfoButton property="flex-shrink" />
        <SwiftButton
          property="flex-shrink"
          currentValue={childStyling.flexShrink}
          handleOnSwiftButtonChange={handleOnPropertyValueChange}
        />
      </div>
    </div>
  );
}

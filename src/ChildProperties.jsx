import { useState } from "react";
import RadioInput from "./RadioInput";
import Selector from "./Selector";

export default function ChildProperties({handleOnPropertyValueChange}){

    const [checkedRadioInput, setCheckedRadioInput] = useState("0")

    const handlleRadioInputChange = (value) => {
        setCheckedRadioInput(value);
        handleOnPropertyValueChange('flex-grow', value);
    }

    return(
        <div className="container_properties__container">
            <div>
                <p>flex-grow</p>
                <div name="flex-grow">
                    <RadioInput name={'flex-grow'} label={0} value={0} checked={checkedRadioInput} onRadioInputChange={handlleRadioInputChange}/>
                    <RadioInput name={'flex-grow'} label={1} value={1} checked={checkedRadioInput} onRadioInputChange={handlleRadioInputChange}/>
                </div>
            </div>
        </div>
    )
}
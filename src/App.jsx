import { useState } from "react";
import BlockContainer from "./BlockContainer";
import Selector from "./Selector";

export default function App() {

  const [flexboxProperties, setFlexboxProperties] = useState({display: "block", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", flexWrap: "flex-direction"});

  const handlePropertyValueChange = (property, value) => {
    switch(property){
      case "display":
        setFlexboxProperties(prevValue => {
          if(prevValue.display === 'flex')
            return ({...prevValue, display: "block"})
          else
            return ({...prevValue, display: "flex"})
        });
        break;
      case "flex-direction":
        setFlexboxProperties(prevValue => ({...prevValue, flexDirection: value}));
        break;
      case "justify-content":
        setFlexboxProperties(prevValue => ({...prevValue, justifyContent: value}));
        break;
      case 'align-items':
        setFlexboxProperties(prevValue => ({...prevValue, alignItems: value}));
        break;
      case 'flex-wrap':
        setFlexboxProperties(prevValue => ({...prevValue, flexWrap: value}));
        break;
    }
  }

  return (
    <>
      <div>
        <label htmlFor="flexbox">Flexbox property: </label>
        <input type="checkbox" name="flexbox" onChange={() => handlePropertyValueChange("display", "flex")} />
        <Selector cssProperty="flex-direction" cssPropertyValues={["row", "row-reverse", "column", "column-reverse"]} handleOnPropertyValueChange={handlePropertyValueChange} />
        <Selector cssProperty="justify-content" cssPropertyValues={["flex-start", "center", "space-between", "space-around", "space-evenly", "flex-end"]} handleOnPropertyValueChange={handlePropertyValueChange} />
        <Selector cssProperty="align-items" cssPropertyValues={["flex-start", "center", "stretch", "baseline", "flex-end"]} handleOnPropertyValueChange={handlePropertyValueChange} />
        <Selector cssProperty="flex-wrap" cssPropertyValues={["nowrap", "wrap", "wrap-reverse"]} handleOnPropertyValueChange={handlePropertyValueChange} />
      </div>
      <BlockContainer flexboxProperties={flexboxProperties} />
    </>
  )
}

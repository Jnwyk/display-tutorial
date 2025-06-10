import { useState } from "react";
import BlockContainer from "./BlockContainer";
import ContainerProperties from "./ContainerProperties";

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
    <div className="general__container">
      <div className="properties__container">
        <ContainerProperties handleOnPropertyValueChange={handlePropertyValueChange} />
        <ContainerProperties handleOnPropertyValueChange={handlePropertyValueChange} />
      </div>
      <BlockContainer flexboxProperties={flexboxProperties} />
    </div>
  )
}

import { useState } from "react";
import BlockContainer from "./BlockContainer";

export default function App() {

  const [isFlexbox, setIsFlexbox] = useState(false);
  let displayContainerClass = isFlexbox ? "display__container flex" : "display__container";

  const handleIsFlexbox = () => {
    setIsFlexbox(prevValue => !prevValue)
  }

  return (
    <>
      <div>
        <label htmlFor="flexbox">Flexbox property: </label>
        <input type="checkbox" name="flexbox" onChange={() => handleIsFlexbox()} />
      </div>
      <BlockContainer displayContainerClass={displayContainerClass} />
    </>
  )
}

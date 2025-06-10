import Selector from "./Selector"

export default function ContainerProperties({handleOnPropertyValueChange}){

    return(
        <div className="container_properties__container">
            <label htmlFor="flexbox">Flexbox property: </label>
            <input type="checkbox" name="flexbox" onChange={() => handleOnPropertyValueChange("display", "flex")} />
            <Selector cssProperty="flex-direction" cssPropertyValues={["row", "row-reverse", "column", "column-reverse"]} handleOnPropertyValueChange={handleOnPropertyValueChange} />
            <Selector cssProperty="justify-content" cssPropertyValues={["flex-start", "center", "space-between", "space-around", "space-evenly", "flex-end"]} handleOnPropertyValueChange={handleOnPropertyValueChange} />
            <Selector cssProperty="align-items" cssPropertyValues={["flex-start", "center", "stretch", "baseline", "flex-end"]} handleOnPropertyValueChange={handleOnPropertyValueChange} />
            <Selector cssProperty="flex-wrap" cssPropertyValues={["nowrap", "wrap", "wrap-reverse"]} handleOnPropertyValueChange={handleOnPropertyValueChange} />
        </div>
    )
}
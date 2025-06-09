export default function Selector({cssProperty, cssPropertyValues, handleOnPropertyValueChange}){
    return(
        <div>
          <p>{cssProperty}</p>
          {cssPropertyValues.map((property) => {
            return(
                <button key={property} onClick={() => handleOnPropertyValueChange(cssProperty, property)}>{property}</button>      
            )
          })}
        </div>
    )
}
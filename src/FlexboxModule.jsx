export default function FlexboxModule({handleOnPropertyValueChange}){
    return (<div className="container_properties__container">
        <label htmlFor="flexbox">Flexbox property: </label>
            <input
            type="checkbox"
            name="flexbox"
            onChange={() => handleOnPropertyValueChange('display', 'flex')}
            />
    </div>)
}
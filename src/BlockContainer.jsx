import Block from "./Block";

const numberArray = [1, 2, 3, 4, 5];

export default function BlockContainer({flexboxProperties}){
    console.log(flexboxProperties)
    return(
        <div className="display__container" style={{display: flexboxProperties.display, flexDirection: flexboxProperties.flexDirection, justifyContent: flexboxProperties.justifyContent, alignItems: flexboxProperties.alignItems, flexWrap: flexboxProperties.flexWrap}}>
            {numberArray.map(block => <Block key={Math.random()} number={block} />)}
        </div>
    )
}
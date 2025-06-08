import Block from "./Block";

export default function BlockContainer({displayContainerClass}){
    return(
        <div className={displayContainerClass}>
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
      </div>
    )
}
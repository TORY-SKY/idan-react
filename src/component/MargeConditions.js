import React from "react"
import Cond1 from "./ConditionComp"
import Cond2 from "./ConditionComp"

function Marger(props){
    const isRendered = !props.isRendered;
    if(isRendered === true){
        return <Cond1 />
    }
   
        return <Cond2 />
    
}
export default Marger;
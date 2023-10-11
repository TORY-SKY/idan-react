import React from "react"
import Cond1 from "./ConditionComp"
//import Cond2 from "./ConditionComp"
function Cond2 (){
    return <h2>Hello world</h2>
}
function Marger(props){
    {isRendered ? <Cond1 /> : <Cond2 />};
    let isRendered = !props.isRendered;
   let btnHandler = ()=> {if(!isRendered){
        isRendered = true;
        
    }else{
        isRendered = false;
    }
console.log(isRendered)}
   return (
        <>
        
        <button onClick={
            btnHandler
        }>Click me </button>
       
        </>
   ) 
    
}
export default Marger;
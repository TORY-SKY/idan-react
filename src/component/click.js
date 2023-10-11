import React from "react"
function Buttn(){
    const clickHandler= () => {
        console.log('clicked');
     }
     return (
        <button onLoad={clickHandler}>click me</button>
     );
}
export default Buttn;
import React from "react"
function Buttn(){
    const clickHandler= () => {
        console.log('clicked');
     }
     return (
        <button onClick={clickHandler}>Click me</button>
     );
}
export default Buttn;
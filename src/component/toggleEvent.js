import React from "react";
function Toggler(){
    let darkModeOn = true;
    let Mode = <h1>Dark mode on</h1>;
    function Togglebtn(){
        return(
            
        )
    }
    
    if(!darkModeOn){
       Mode  = <h1>Light Mode is on</h1>;
    }else{
        Mode  = <h1>Dark Mode is on</h1>;

    }

    return (
        <h1>{Mode}</h1>
    )

}
export default Toggler;
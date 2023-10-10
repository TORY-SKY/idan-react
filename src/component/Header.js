import React, { useState } from "react"
function Header(props){
    console.log(props);
    let ade = "A boy"
    const [one, setOne] = useState(ade);
    function Change(){
       
        const input = prompt('your name please');
            setOne(input);
        
    }
    return <>
        <nav>
            <ul>
                <li><a>Home {one}</a></li>
                <li><a>Catalog</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
                <li><a>About</a></li>
                <Test message={one} />
                <button onClick={Change}>Disp</button>
            </ul>
        </nav>
        
    </>;
    function Test(props){
        return (
            <>
            <h1>{props.message}</h1>
            
            </>
        )
    }
    
    
}
export  default Header;
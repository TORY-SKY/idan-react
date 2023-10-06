import React from "react"
function Header(props){
    console.log(props);
    return <>
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>Catalog</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
                <li><a>About</a></li>
            </ul>
        </nav>
    </>;
}
export  default Header;
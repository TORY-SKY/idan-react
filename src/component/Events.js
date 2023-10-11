import React from "react"

function EventTar(){
    const shoot= (a, b) => {
        alert(typeof(b))
    }
    return (
        <button onKeyDown={(event)=>   shoot("Goal!", event)}>Click Me</button>
    )
}
export default EventTar;
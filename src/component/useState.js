
import React, { useState } from 'react'
function Ustate(){
const [count, setCount] = useState(0);
return(
    <div>
        <h1>Count: {count} </h1>
        <button onClick= {() => setCount(count + 1)}>Increase the count NO</button>
    </div>
)
}
export default Ustate;
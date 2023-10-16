
import React, { useState } from 'react'
const Counter = ()=>{
    const [count, setState] = useState(0);
    const countIncrease = ()=>{
        setState(count+ 1)
    }
    return <>
       <h1>you've clicked the button {count} times now</h1>
       <button onClick={countIncrease}>click me bro</button>
    </>
   };
export default Counter;
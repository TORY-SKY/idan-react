
import React, { useState } from 'react'
    
   
const Counter = ()=>{
    const [count, setState] = useState(0);
    const countIncrease = ()=>{
        setState(count+ 1)
        alert('now thats what im talking about');
        alert('same way you just pressed that button, go talk to that girl with same energy');
    }
    return <>
       <h1>you've clicked the button {count} times now</h1>
       <button onClick={countIncrease}>click me bro, what, you don't have the balls?</button>
      
    </>
   };
export default Counter;
import React from 'react';
import {useState} from 'react'

function UseTate(){
    const [count setCount] = useState(0);
    return(
        <>
        <h1>Care to increase {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        <button onClick={()=>setCount(count - 1)}>Decrease</button>
        </>
    )
}
export default UseTate;
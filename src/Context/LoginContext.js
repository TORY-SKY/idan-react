import React from 'react';
import {useState} from 'react'
import {useReducer} from 'react'



const reducer = (state, action) => {
    if (action.type === 'ride') return {money: state.money +50};
    if (action.type === 'fuel') return {money: state.money -10};
    return new Error();
} 
    function SubApp(){
        const initialState = {money: 100};
        const [state, dispatch] = useReducer(reducer, initialState);
        return(
            <>
            <h1>WALLET: {state.money}</h1>
            </>
        )
    }

function UseStateExample(){
    const [count, setCount] = useState(0);
    return(
        <>
        
        <input type='number' value= {count} />
        <h1>Count {count}</h1>
        
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        <button onClick={()=>setCount(count - 1)}>Decrease</button>
        </>
    )
}
export default UseStateExample;
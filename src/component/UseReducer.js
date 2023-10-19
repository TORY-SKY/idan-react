import React from 'react'
import { useReducer } from 'react'
//working with the useReducer hook
//here's one of the useReducer function 
const reducer = (state, action)=>{
    if(action.type === 'ride') return {money: state.money + 1};
    if(action.type === 'fuel') return {money: state.money - 1};
    return new Error();
    
}
function UseReducer() {
    const InitialStateOfMoney = {money: 100};
    const [state, dispatch] = useReducer(reducer, InitialStateOfMoney);
  return (
    <>
    <h1>Wallet Balance: {state.money}</h1>
    <button onClick={() => dispatch({type: 'ride'})}>Customer</button>
    <button onClick={() => dispatch({type: 'fuel'})}>Fuel</button>

    </>
  )
}

export default UseReducer;
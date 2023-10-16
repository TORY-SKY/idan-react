import {createContext, useContext, useReduce, useState} from 'react'

function UseTate(props){
    const [countThis setCountThis] = useState(0);
    return(
        <>
        <h1>Care to increase {countThis}</h1>
        <p>{props.name} clicked the button</p>
        <button onClick={()=> setCountThis(countThis + 1)}>Increase</button>
        <button onClick={()=>setCountThis(countThis - 1)}>Decrease</button>
        </>
    )
}
export default UseTate;
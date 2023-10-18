import React,  {useEffect} from 'react'
//working on useEffect hook
function TestFunct(){
    return <h1>I'm Loading...</h1>
}
const UseEffectComponent = () => {
    useEffect(()=> {
        console.log('Working on use effect hook')
    }, [])
    return (
        <div>
            <h1>The Component rendering</h1>

            <TestFunct />
        </div>
    )
}
export default UseEffectComponent;
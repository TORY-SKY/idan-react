import React,  {useEffect} from 'react'
//working on useEffect hook


const UseEffectComponent = () => {
    useEffect(()=> {
        console.log('Working on use effect hook')
    }, [])
    return (
        <div>
            <h1>The Component rendering</h1>
        </div>
    )
}
export default UseEffectComponent;
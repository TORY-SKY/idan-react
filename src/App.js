
import './App.css';
//import ListITems from './component/RandomComp'
//import React, {useState} from 'react'
//import{LoginContext} from './Context/LoginContext'
import Counter from './component/useState.js'
import UseTate from './Context/LoginContext.js'

   function DontPlay(){
      
    let DDate = new Date();
    const ToDay = DDate.getDay();
    switch(ToDay){
      case 1: 
        return 'Its Monday bro';
        default:
         return 'Its not Sunday';
    }
   }
   
function App() {
   return <>
   <h1>HELLO WORLD FU**K</h1>
      
   <Counter />
   <DontPlay />
   
   <UseTate name="Victor" />
   </>
   
}

export default App;


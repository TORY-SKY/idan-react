
import './App.css';
import ListITems from './component/RandomComp'
import React, {createContext, useState, useContext} from 'react'
const ContAPI = createContext({
   user: null
})

function App() {
   return <>
   <ListITems />
   
   </>
   
}

export const  ContAPI = ContAPI;
export default App;


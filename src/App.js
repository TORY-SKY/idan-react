
import './App.css';
import ListITems from './component/RandomComp'
import React, {useState} from 'react'
import{LoginContext} from './Context/LoginContext'

function App() {
   const [showProfile, setShowProfile] = useState(false);
   const [userName, setUserName] = useState('');
   return <>
      
   <LoginContext.Provider >
      <ListITems />
      
   </LoginContext.Provider>
   
   
   </>
   
}

export default App;


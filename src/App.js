
import './App.css';
import { useContext } from 'react';
import { Store } from './Context';
import { useState,useEffect } from 'react';
import SideButtons from './SideButton';
import ErrorBarChart from './ErrorBarChart';
import Footers from './Footer';




function App() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3 } = useContext(Store)

  useEffect(()=>{

  },[Button1, setButton1, Button2, setButton2, Button3, setButton3])
  return (
    <div className="App">
      <div className='topTitleContainer'>
        
      </div>
      <div className='dataContainer'>
        <ErrorBarChart/>
         <SideButtons/> 
      </div>
      <Footers/>
    </div>
  );
}

export default App;



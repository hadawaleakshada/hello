import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  
  const [name,setName]=useState("hello world");
  function changeMessage(){
  setName("Good morning");
  
  }
  
  
  
  
  return (
    <div className='header'>
    <h1>{name}</h1>
    <button onClick={changeMessage}>changeMessage</button>
    </div>
    
  
    

    
    
  );
}

export default App;


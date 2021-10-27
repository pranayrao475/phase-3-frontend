//import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [data, setData] =useState({message:""})

  useEffect(() => {
  fetch("http://localhost:9292")
  .then(res => res.json())
  .then(jsData => setData(jsData))
  
  }, [])

  return (
    <div className="App">
      
      {data.message}
 
    </div>
  );
}

export default App;



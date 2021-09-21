import "./styles.css";
import React,{useState} from 'react';

const initialtext = ['This is a Crypto Page click below to see more news on Crypto Currency']
const text = ['more Cryto news ahead off and more done']

export default function App() {

  const [display,setDisplay] = useState(false);
  
  return (
    <div className="App">
       <h2>{display ? text : initialtext }</h2>
       <button onClick={()=>{setDisplay(!display)}}>{display ? "show less":"show More"}</button> 
    </div>
  );
}

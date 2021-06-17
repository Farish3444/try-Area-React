// import React from 'react';
import React, { useState } from 'react';





function Product1() {

    const restIt = 0;
    const [state, setstate] = useState(restIt);

    const increaseFive=()=>{
        for(let i=0;i<5;i++){
            setstate(preState => preState + 1)
        }
    }
    
    return (
        <div>
        {state}
      <button onClick={()=>setstate(restIt)}>Reset</button>      
      <button onClick={()=>setstate(state+1)}>add</button>      
      <button onClick={()=>{ if (state ===0) return 0 ;
          setstate(state-1)
          }}>sub</button>
      <br/>
      <button onClick={increaseFive}>Five times</button>
        </div>
    );
}




 
export default Product1;


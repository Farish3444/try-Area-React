// import React from 'react'
import React,{useState,useEffect} from 'react';

function useEffectFun() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePostion= e =>{
         console.log('logged in brows')
         setX(e.clientX)
         setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Affects')
        window.addEventListener('mousemove',logMousePostion)
    }, []);


    return (
        <div>
            Hooking useEffect X-{x}  Y -{y} 
        </div>
    )
}

export default useEffectFun;

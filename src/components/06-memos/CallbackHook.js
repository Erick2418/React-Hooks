import React, { useCallback, useState } from 'react'
import './../02-useEffect/effects.css'
import { Memooss } from './Memooss';
export const CallbackHook = () => {
    /*
    QUE RESOLVEMOS AQUI???
    hacemos que no se vuelva a llamar el  clg que existe en Memooss.js
    debido a que, a pezar de usar el memo();
    se vuelven a llamar.. pues esto debido a que la funcion "contador1-2-3"
    cambia acorde al contador, react no se da cuenta que es el mismo compoennte
    asi que para estos casos se usa el "useCallback"
    
   useCallback( funcion ,[cambio])
    */
    const [counter1, setCounter1] = useState(12);
    const [counter2, setCounter2] = useState(13);
    const [counter3, setCounter3] = useState(15);
    
    const contador1= useCallback( ()=>{ 
        setCounter1(counter1+1) 
    },[counter1]) 
    
    const contador2= useCallback( ()=>{ 
        setCounter2(counter2+1) 
    },[counter2]) 
    
    const contador3= useCallback( ()=>{ 
        setCounter3(counter3+1) 
    },[counter3]) 
    
    return (
        <div>
            <h1>useCallback Hook</h1>
            <hr/>
            
            <div>
            contador 1: 
            <Memooss value={counter1} operacion={contador1} /> 
            <hr/>
            contador 2: 
            <Memooss value={counter2} operacion={contador2} /> 
            <hr/>
            contador 3: 
            <Memooss value={counter3} operacion={contador3} /> 
            </div>
            
            
        </div>
    )
}

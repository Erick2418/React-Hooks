import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import './../02-useEffect/effects.css'
import {procesoPesado} from './../helpers/procesoPesado'

export const MemoHook = () => {
    const {counter,increment} =  useCounter(500);
    const [show, setShow] = useState(true);

  

    const memoProcesPesado=useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> {counter} </small>  </h3>
            <hr/>
            <p>{memoProcesPesado}</p>
            <button 
            className= "btn btn-primary"
            onClick={ increment}
            >
                +1
            </button>
            <br/>
            <br/>
            <br/>
            <button
            className= "btn btn-primary"
                onClick={ ()=>{
                    setShow(!show);
                }
            }
            >Show/Hide: {JSON.stringify(show)} </button>


        </div>
    )
}

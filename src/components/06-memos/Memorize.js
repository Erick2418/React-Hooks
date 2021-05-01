import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import './../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {
    const {counter,increment} =  useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h2>Memorize</h2>
            <h3>counter:  <Small value={counter} /> </h3>
{/*
El memo en este caso, permite que no se vuelva a ejecutar un componente
si no controlamos el increment, al aplastar sobre el show
este hara que el counter se vuelva a ejecutar sin que querramos
peeero gracias al memo, el guarda en la memoria la ejecucion del componente
y en este caso solo ejecutara otra vez, cuando el boton de increment se pulse

*/}


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

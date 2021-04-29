import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './../02-useEffect/effects.css';
export const MultipleCustomHooks = () => {

    const {counter,increment}=useCounter(1);

    const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
    const {author,quote} = !!data && data[0];
    /*
    Algo Interesante de el !!DATA es que
    data regresa null la primera vez
    !data regresa true  (niega el null)
    !!data regresa false (niega el null que esta en true y lo pasa a false)
    pd: en este caso data[0] es lo que queremos
    */ 

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> {quote} </p>
                            <footer className="blockquote-footer"> {author}</footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                siguiente quote
            </button>

        </div>
    )
}

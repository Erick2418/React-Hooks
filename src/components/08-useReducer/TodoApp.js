import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import "./styles.css"
import { todoReducer } from './todoReducer'
// const initialState=[{
//     id: new Date().getTime(),// genera un numero largo
//     desc: 'Aprender React',
//     done: false
// }]  corte y pegue esto en el init
// ******* PARA INICIAR POR DEFECTO
// const init =()=>{
//     return[{
//         id: new Date().getTime(),
//         desc: 'Aprender React',
//         done: false
//     }];
// }
// ******* PARA INICIAR DEL LOCALSTORAGE
const init= () =>{
    return JSON.parse(localStorage.getItem('todos'))|| [];
    /*Que sucedio aqui? pues... como sabemos que esto regresa string..
    y si no tiene nada en el localStorage.. pues se moria el programa
    por ello hacemos la condicion que si no esta disponible nada
    en el localStorage se regresa un ARREGLO VACIO */
}


export const TodoApp = () => {

    const [todos,dispatch] = useReducer(todoReducer, [],init);
    //const [state, dispatch] = useReducer(reducer, initialState, init)
    //reemplaze el initianstate por un arreglo vacio
    const [{description}, handleInputChange, reset] =useForm({
        description: ''
    });
        /*Con esto guardaremos la info en el localStorage.
        el useEffect permitira que se haga solo cuando hay cambios
        no acada rato */
    useEffect(() => {

       localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
   

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(description.trim().length<=1){
            return;
        }

        const newTodo={
            id: new Date().getTime(),// genera un numero largo
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload:newTodo
        }

        dispatch(action);

        reset();

    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                    {
                            todos.map( (todo,i)=>(
                            <li
                                key={todo.id}
                                className="list-group-item"
                            >
                            <p className="text-center">{i+1} . {todo.desc} </p>
                                <button
                                className="btn btn-danger"
                                >
                                    Borrar
                                </button>

                            </li>
                            ))
                    }
                </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender.."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        
                        <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1 btn-block"
                        >
                        Agregar
                    </button>

                    </form>
                    
                </div>
            </div>
        </div>
    )
}



/*
Un todo es... como especie de un state 
este maneja la accion y el state como parametros.
pasos:
1: crea el todo o initialState 
2: crea el TodoReducer
3: manda a llamar al todoReducer para que inicie con el initialState
4: creas un nuevo todo.. 
5: creas un aggToAcTion con los parametros type & playload
6: mandas esa new accion a ejecutar y le pasas por parametro el newTodo

*/
const initialState= [{
    id: 1,
    todo: 'comprar pan',
    done: false // el done dice si esta terminada o no la tarea
}]

 const todoReducer = (state= initialState,action) => {

    if(action?.type==='agregar'){
        return [...state,action.playload];
    }
    return state;
}
let todos= todoReducer();

const newTodo={
    id: 2,
    todo: 'comprar leche',
    done: false
}

const aggTooAction ={
    type: 'agregar',
    playload: newTodo
}

todos= todoReducer(todos,aggTooAction);
console.log(todos);


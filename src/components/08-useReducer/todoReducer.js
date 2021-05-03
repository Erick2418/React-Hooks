export const todoReducer=(state=[], action)=>{

    switch (action.type) {
        case 'add':
                return [...state,action.payload];
        case 'delete':
            return state.filter(todo=>todo.id!==action.payload) 
            /*EL FILTER REGRESA UN ARREGLO con condiciones 
            recorrera los todos.id... y eliminara el id en especifico*/
        case 'toogle':// OPTIMO 
            return state.map( todo=>
                (todo.id===action.payload)
                ?  {...todo, done: !todo.done}
                : todo
                );
            
        // case 'toogle-old':// NO OPTIMO :,v
        //     return state.map(
        //         todo=>{
        //             if(todo.id === action.payload){ 
        //                 return {
        //                     ...todo,
        //                     done: !todo.done
        //                 };
        //             }else{
        //                 return todo;
        //             }
                
        //         });
            /*Permite editar los todos */

        default:
            return state;
    }


}
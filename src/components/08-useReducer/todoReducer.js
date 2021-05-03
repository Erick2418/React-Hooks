export const todoReducer=(state=[], action)=>{

    switch (action.type) {
        case 'add':
                return [...state,action.payload];
        case 'delete':
            return state.filter(todo=>todo.id!==action.payload) 
            /*EL FILTER REGRESA UN ARREGLO con condiciones 
            recorrera los todos.id... y eliminara el id en especifico*/
            

        default:
            return state;
    }


}
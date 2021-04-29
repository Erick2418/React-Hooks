import React, { useEffect } from 'react'

export const Message = () => {

    
    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('Componente desmontado');
        }
    }, [])

    return (
        <div>
            <h2>Eres Genial!!!!</h2>        
        </div>
    );

}

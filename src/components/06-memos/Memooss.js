import React, { memo } from 'react'

export const Memooss = memo(({value,operacion}) => {
    console.log('llamamos al componente')
    return (
        <>
            <p>{value}</p>
            <button className="btn btn-primary" 
            onClick={operacion}>
                +1
            </button>
        </>
    )
})

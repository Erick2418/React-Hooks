import React, { memo } from 'react'

export const Small = memo( ({value}) => {
    
    console.log('Me Volvi a llamar');
        return (
            <small>
                {value}
            </small>
        )
}
);
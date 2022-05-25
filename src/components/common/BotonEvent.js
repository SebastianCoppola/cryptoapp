import React from 'react'
import { Button } from '@mui/material';


const BotonEvent = ({variant,color,value,handleClick}) => {
    
    return (
        <Button variant={variant} color={color} onClick={handleClick}>
            {value}
        </Button>
    )
}

export default BotonEvent;
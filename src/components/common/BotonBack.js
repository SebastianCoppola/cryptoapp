import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Boton = () => {
    const navigate = useNavigate();

    return (
        <Button variant="contained" color="success" onClick={() => navigate(-1)}>
            Go Back
        </Button>
    )
}

export default Boton;
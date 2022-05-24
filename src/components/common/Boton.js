import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Boton = ({link,value}) => {

    return (
        <Link to={link} className="link">
            <Button variant="contained" color="success">
                {value}
            </Button>
        </Link>
    )
}

export default Boton;
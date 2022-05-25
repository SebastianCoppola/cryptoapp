import React from 'react';
import { IconButton , Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import BotonEvent from './BotonEvent';
import { useNavigate } from 'react-router-dom';



const UnderConstruction = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="under-construction">
            <h2>Under Construction</h2>
            <IconButton>
                <ConstructionIcon fontSize="large" />
            </IconButton> <br />
            <BotonEvent variant="contained" color="success" value="GO BACK" handleClick={goBack}/>
        </div>
    )
}
export default UnderConstruction;

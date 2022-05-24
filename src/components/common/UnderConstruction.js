import React from 'react';
import { IconButton , Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';
import BotonBack from './BotonBack';

const UnderConstruction = () => {
    const navigate = useNavigate();

    return (
        <div className="under-construction">
            <h2>Under Construction</h2>
            <IconButton>
                <ConstructionIcon fontSize="large" />
            </IconButton> <br />
            <BotonBack />
        </div>
    )
}
export default UnderConstruction;

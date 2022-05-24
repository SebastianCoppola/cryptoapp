import React from 'react';
import { IconButton , Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import BotonBack from './BotonBack';

const NotFound = () => {
    return (
        <div className='body'>
            <h2>Page Not Found</h2>
            <IconButton>
                <ErrorIcon fontSize="large" />
            </IconButton> <br />
            <BotonBack value='GO BACK' />

        </div>
    )
}

export default NotFound;
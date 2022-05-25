import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CoinDetail from '../../views/CoinDetail/CoinDetail';

const iconStyle = {
    color: '#fff',
    backgroundColor: 'green',
    borderRadius: '50%'
};

const PlusIcon = ({link}) => {
    return (
        <IconButton size="small">
            <Link to={link} element={<CoinDetail />}>
                <AddIcon style={iconStyle} />
            </Link> 
        </IconButton>
    )
}

export default PlusIcon;
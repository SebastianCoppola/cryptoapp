import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [ value, setValue ] = useState(null);
    const [ coinsName, setCoinsName ] = useState([]);
    const submitRef = useRef();
    const navigate = useNavigate();
    
    useEffect( () => {
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR')
            .then( res => res.json() )
            .then( res => {
                const arrayNames = [];
                res.coins.map(coin => {
                    arrayNames.push(coin.id)
                })
                setCoinsName(arrayNames);
            })
        },[])

    return (
        <Autocomplete
            ref={submitRef}
            sx={{ width: 300 }}
            options={coinsName}
            renderInput={(params) => <TextField {...params} label="Search Coin" />}
            value={value}
            onChange={( e, newValue ) => {
                navigate(`/coindetail/${newValue}`);
            }}
        />
    );
}
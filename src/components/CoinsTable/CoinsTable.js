import * as React from 'react';
import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CoinDetail from '../../views/CoinDetail/CoinDetail';
import './CoinTable.css'
import Placeholder from '../common/Placeholder';


export default function BasicTable() {
    
    const [ coins, setCoins ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR')
            .then( res => res.json() )
            .then( res => {
                setCoins(res.coins);
                setLoading(false);
            })
        },[])
    
    useEffect( ()=>{
        if(loading == false){
            const price = document.querySelectorAll(".price");
            const priceArray = [...price].map( p => {
                if(p.innerHTML > 0){
                    p.style.color = "red";
                }else if(p.innerHTML < 0){
                    p.style.color = "green";
                }
            })
        }
    },[loading])
    
    return (
        <>    
            {
                loading
                ?
                <Placeholder />
                :
                <TableContainer component={Paper} className="coins-table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Symbol</TableCell>
                                <TableCell align="center">U$S</TableCell>
                                <TableCell align="center">A$R</TableCell>
                                <TableCell align="center">1hour</TableCell>
                                <TableCell align="center">1day</TableCell>
                                <TableCell align="center">1week</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                coins.map((coin) => (
                                    <TableRow key={coin.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row"><b>{coin.name}</b></TableCell>
                                        <TableCell align="center">{coin.symbol}</TableCell>
                                        <TableCell align="center">{coin.price.toFixed(2)}</TableCell>
                                        <TableCell align="center">{(coin.price*200).toFixed(2)}</TableCell>
                                        <TableCell align="center" className="price">{coin.priceChange1h}</TableCell>
                                        <TableCell align="center" className="price">{coin.priceChange1d}</TableCell>
                                        <TableCell align="center" className="price">{coin.priceChange1w}</TableCell>
                                        <TableCell align="center">
                                            <IconButton size="small">
                                                <Link to={`/coindetail/${coin.id}`} element={<CoinDetail />}>
                                                    <AddIcon className="coin-icon" />
                                                </Link> 
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                
            }
        </>
    );
}


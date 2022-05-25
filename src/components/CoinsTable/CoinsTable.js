import * as React from 'react';
import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Placeholder from '../common/Placeholder';
import CustomTableHead from '../common/CustomTableHead.js'
import CustomTableBody from '../common/CustomTableBody.js'


export default function BasicTable() {
    
    const [ coins, setCoins ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const columns = ['Name','Symbol','U$S','A$R','1hour','1day','1week',' '];

    useEffect( () => {
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR')
            .then( res => res.json() )
            .then( res => {
                setCoins(res.coins);
                setLoading(false);
            })
        },[])

    return (
        <>    
            {
                loading
                ?
                <Placeholder />
                :
                <TableContainer component={Paper} className="coins-table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <CustomTableHead columns={columns}/>
                        <CustomTableBody datas={coins}/>
                    </Table>
                </TableContainer>
                
            }
        </>
    );
}


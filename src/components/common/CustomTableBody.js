import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import PlusIcon from './PlusIcon.js';
import './CustomTableBody.css'

const CustomTableBody = ({datas}) => {
    return (
        <TableBody>
            {
                datas.map((data) => (
                    <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row"><b>{data.name}</b></TableCell>
                        <TableCell align="center">{data.symbol}</TableCell>
                        <TableCell align="center">{data.price.toFixed(2)}</TableCell>
                        <TableCell align="center">{(data.price*200).toFixed(2)}</TableCell>
                        <TableCell align="center" className={`${data.priceChange1h>0?'green':'red'}`}>{data.priceChange1h}</TableCell>
                        <TableCell align="center" className={`${data.priceChange1d>0?'green':'red'}`}>{data.priceChange1d}</TableCell>
                        <TableCell align="center" className={`${data.priceChange1w>0?'green':'red'}`}>{data.priceChange1w}</TableCell>
                        <TableCell align="center"><PlusIcon link={`/coindetail/${data.id}`} /></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

export default CustomTableBody;

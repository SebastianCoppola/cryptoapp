import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const CustomTableHead = ({columns}) => {
    return (
        <TableHead>
            <TableRow>
                { 
                    columns.map(col => (
                        <TableCell key={col} align="center">{col}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    )
}

export default CustomTableHead;

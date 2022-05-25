import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import { TableBody } from '@mui/material/';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import './CoinDetailTable.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddIcon from '@mui/icons-material/Add';
import BotonLink from '../common/BotonLink';

const CoinDetailTable = ({data}) => {
    return (
        <div className="coin-detail">
            <div className="div-left">
                <img src={data.icon} />
                <h2>{data.name}</h2>
                <div className="div-left-links">
                    <IconButton size="small">
                        <a href={data.websiteUrl} target='_blank'>
                            <LanguageIcon className="detail-icon"/>
                        </a> 
                    </IconButton>
                    <IconButton size="small">
                        <a href={data.twitterUrl} target='_blank'>
                            <TwitterIcon className="detail-icon"/>
                        </a> 
                    </IconButton>
                    <IconButton size="small">
                        <Link to={data.exp}>
                            <AddIcon className="detail-icon"/>
                        </Link>
                    </IconButton>
                </div>
            </div>
            <div className="div-right">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }}>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">Symbol:</TableCell>
                                <TableCell align="left">{data.symbol}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Ranking:</TableCell>
                                <TableCell align="left">{data.rank}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">U$S</TableCell>
                                <TableCell align="left">{data.price}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">BTC:</TableCell>
                                <TableCell align="left">{data.priceBtc}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Volume:</TableCell>
                                <TableCell align="left">{data.volume}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Market Cap:</TableCell>
                                <TableCell align="left">{data.marketCap}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Available Supply:</TableCell>
                                <TableCell align="left">{data.availableSupply}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">Total Supply:</TableCell>
                                <TableCell align="left">{data.totalSupply}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <BotonLink link='/coins' value='Go Back to Currencys' variant="contained" color="success"/>
        </div>
    )
}
export default CoinDetailTable;


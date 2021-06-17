import React from 'react';
import './TableDesign.css';
// 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const QuotesTable = ({ info,Loading }) => {
    return (   
        <TableContainer>   
            <Table>
               <TableHead>                 
                   <TableRow >
                       <TableCell style={{color:'red'}}>S.no</TableCell>
                       <TableCell align="center" style={{color:'red'}}>Quote</TableCell>
                       <TableCell style={{color:'red'}}>Author</TableCell>
                   </TableRow>
               </TableHead>
                   <TableBody>
                   {info.map((i)=>{
                           return(
                               <TableRow key={i.quote_id}>
                                   <TableCell>{i.quote_id}</TableCell>
                                   <TableCell align="center" >{i.quote}</TableCell>
                                   <TableCell>{i.author}</TableCell>
                               </TableRow>
                           );
                       })};                       
                   </TableBody>
            </Table>
        </TableContainer>
    )
}

export default QuotesTable

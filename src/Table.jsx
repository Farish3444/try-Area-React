// import React from 'react';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Farish', 5, 9.0, 24, 'Python,MySql,Dart'),
  createData('Ajith', 2, 9.0, 37, 'MySql'),
  createData('Arun', 2, 16.0, 24, 'Golang, TSX'),
  createData('Bharath', 1, 3.7, 67,'DM,Cloud'),
  createData('Vicky', 3, 16.0, 49, '.Net'),
];

function BasicTable() {
  
  const [state, setstate] = useState(false);
  let history = useHistory();
  function Push(){
    history.push("/")
  }


  const classes = useStyles();
  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Developers</TableCell>
            <TableCell align="left">Experience</TableCell>
            <TableCell align="right">CCTC</TableCell>
            <TableCell align="right">Projects</TableCell>
            <TableCell align="right">Additionals Skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Button onClick={Push} style={{marginLeft:'45%',fontSize:'30%',width:'15%',color:'black'}} variant='contained' color='primary'>Back to Home Page</Button>
    </React.Fragment>
  );
}
export default BasicTable;
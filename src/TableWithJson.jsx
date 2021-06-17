// import React from 'react'
import { Table } from '@material-ui/core'
// import ReactTable from "react-table";  
// import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const PracticeField = ()=> {
   
    const [product, setproduct] = useState([]);
    const [search, setsearch] = useState('');
    
    const getProductData = async() => {
        try{
            const data = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(data.data)
            setproduct(data.data);
        }
        catch(e){
          console.log(e)
        }        
    }
    const deleteButton = async data => {
        const posts = product.filter(p => p.id !== data.id)
        setproduct(posts)         
        await axios.delete('https://jsonplaceholder.typicode.com/users'+ data.id)
        }
        const AddPost = async()=>{
            const obj = {id:11,name:'farish',username:'Developer',email:'@tesla.com',geo:34343}
            const add = await axios.post('https://jsonplaceholder.typicode.com/users',obj)
            setproduct(add)
        }

    useEffect(() => {
        getProductData();
      }, []);


    return(
        <React.Fragment>
<TextField 
    label='Type Here'
    onChange={(e)=> setsearch(e.target.value)}
    type='text'
    placeholder='Search Here'
    style={{textAlign:'center',backgroundColor:'lightblue'}}    
/>
    <Button variant='outlined' color='primary' onClick={AddPost}>Post</Button>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>geo</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {product.filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })                      
                        .map((item)=>{
                        return(
                      <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.username}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            {/* code to get data from an nested object in with two datas in a same time */}
                            <TableCell>lattitude-{item.address.geo.lat} <br/>longitutde-{item.address.geo.lng}</TableCell>
                            <TableCell>
                                <Button color='secondary' variant='outlined' onClick={()=>deleteButton(item)}>Delete</Button>
                            </TableCell>                      
                     </TableRow>
                        );
                    })}
            </TableBody>
        </Table>
    </TableContainer>
        </React.Fragment>
    );
}
    
export default PracticeField;
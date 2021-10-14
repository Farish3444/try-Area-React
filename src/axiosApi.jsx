import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { api } from './Services/Config.json'
import {useHistory,useLocation} from 'react-router-dom'
import HOC from './HOC';
import "./App.css";
import TodoList from './TodoList';

const AxiosApi = () => {

    const history = useHistory();
    const location = useLocation();


    const [drink, setdrink] = useState([]);

    useEffect(async()=>{
        const data = await axios.get(api)
        console.log(data)
        setdrink(data.data)
    },[]);

    return (
        <div>
            <h1>List of Drinks Available</h1>
            {
                drink.map((d,i)=>{
                    return(
                        <ul key={i}>
                            <li onClick={()=>{history.push({
                                pathname:`/Bdrinks/${d.name}`,
                                state:{
                                    value:d.id
                                }
                            })}}>
                            {
                               d.name     
                            }
                            </li>
                        </ul>
                    )
                })
            }

        </div>
    )
}

export default AxiosApi
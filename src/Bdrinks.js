import React,{useState,useEffect} from 'react';
import {useHistory,useLocation,useParams} from 'react-router-dom'
import axios from 'axios';
import { api } from './Services/Config.json'
import './App.css';

const Bdrinks = ({match}) => {
    let params = useParams();
    const history = useHistory();
    const location = useLocation();
    const value = location.state.value

    console.log(value,"valueee")

    const [moredetails, setMoredetails] = useState([]);

    useEffect(async()=>{
        const data = await axios.get(api + `/${value}` );
        console.log(data)
        setMoredetails(data.data)
    },[])


    return (
        <div>
        {
            moredetails.map((m,i)=>{
                return(
                    <div>
                        <h1>{m.name} Details</h1>
                        <br/>
                        <img src={m.image_url} key={i}/>
                        <p key={i}>{m.tagline}</p>
                        <p key={i}>{m.boil_volume.value} {m.boil_volume.unit}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Bdrinks

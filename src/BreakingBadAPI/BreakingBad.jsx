import React,{useState,useEffect} from 'react';
import axios from 'axios';
import QuotesTable from './QuotesTable';
import SearchQuotes from './SearchQuote';

const BreakingBad = () => {

    const [info, setInfo] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    
    useEffect(()=>{
        const data = async()=>{
        const fetchItems = await axios(`https://www.breakingbadapi.com/api/quotes?${query}`);
        console.log(fetchItems.data)
        console.log(data.data)
        setInfo(fetchItems.data)
        setLoading(false) 
    }
    data();
    },[])

    return (
        <div>
        <SearchQuotes  getQuery={(q) => setQuery(q)} />
        <QuotesTable Loading={Loading} info={info}  />
        </div>
    );
}

export default BreakingBad
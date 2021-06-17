import React,{useEffect,useState} from 'react';
import axios from 'axios';
import PaginateButtons from './PaginateButtons';



const renderData = (data) => {
    return (
        <div>
            <ul>
               {data.map((todo,index)=>{
                   return <li key={index}>{todo.id} {todo.title}</li>;
               })}
            </ul>
        </div>
    )
}


const Paginates = () => {

const [data, setdata] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10);

const handleChange=(event)=>{
     setCurrentPage(Number(event.target.id));
}

const pages = [];
for(let i=1;i<=Math.ceil(data.length/itemsPerPage); i++ ){
    pages.push(i);
};



const indexofLastItem = currentPage * itemsPerPage;
const indexofFirstItem = indexofLastItem - itemsPerPage;
const currentItems = data.slice(indexofFirstItem , indexofLastItem);

const renderPageNumbers= pages.map((number)=>{
    return( 
        <div>

    
    <li 
    key={number}
    onClick={handleChange}
    id={number}
    className={currentPage === number ? 'active':null}
    >
    {number}
    </li>
   
        </div>
    )
})


    useEffect(()=>{
         const fetchPaginate = async()=>{
             const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setdata(result.data)
             console.log(result.data);
         }
         fetchPaginate();
    },[])


    const handleNext=()=>{
        if (currentPage ===10) return {currentPage}
        setCurrentPage(currentPage+1)
    }

    const handlePrev=()=>{
       if(currentPage === 1) return{currentPage}
       setCurrentPage(currentPage-1)
    }


    return (
        <div>
           
            {renderData(currentItems)}  
            <ul className='pageNumbers'>

            <li>
            <button onClick={handlePrev}>Previous Page</button>
            </li>

            {renderPageNumbers}
            <li>    
            <button onClick={handleNext}>Next Page</button>
            </li>
            </ul>
        </div>
    )
}

export default Paginates

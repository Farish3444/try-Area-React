import React,{useState,useEffect} from 'react';
// import PracticeComp from './PracticeComp';
import axios from 'axios';



const PracticeField = () => {

    const [dataFetch, setDataFetch] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);



    useEffect(() => {
      const fetchData=async()=>{
          const data = await axios.get(`http://jsonplaceholder.typicode.com/users`);
          setDataFetch(data.data)
          console.log(data.data);
      }
      fetchData(); 
    },[])

  const handleChange=(event)=>{
      setCurrentPage(Number(event.target.id));
  }

  const pages =[];
  for (let i = 1 ; i <= Math.ceil(dataFetch.length/itemsPerPage); i++){
      pages.push(i);
  }

  const indexofLastItem= currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  const currentItems = dataFetch.slice(indexofFirstItem,indexofLastItem)

const renderPageNumbers = pages.map((number)=>{
    return(
        <div>
        <button>

            <li 
    key={number}
    onClick={handleChange}
    className={currentPage === number ? 'active':null}
    style={{float:'left',margin:'0',padding:'0'}}
    >
    {number}
    </li>
        </button>
        </div>
    )
})

    return (
        <React.Fragment>
       <div className="data-ul">
         {dataFetch.map(d =>{
             return(
                 <li key={d.id}>
                     {d.name}
                 </li>
             )
         })}
       </div>

       {renderPageNumbers}

       <div className="pageNumber">
            <nav aria-label="Page navigation example">
  <ul class="pagination">
   
    <li class="page-item"><a class="page-link">1</a></li>
    <li class="page-item"><a class="page-link">2</a></li>
    <li class="page-item"><a class="page-link">3</a></li>
    
  </ul>
</nav>
        </div>
        </React.Fragment>
    )
}

export default PracticeField
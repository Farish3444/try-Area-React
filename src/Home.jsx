import React from 'react';
import logo from './logo.svg';
import passion from './passion.jpeg';
import fivestar from './fivestar.png';
import Button from '@material-ui/core/Button';
import {Link,useHistory} from 'react-router-dom';

const Home = () =>{

    let history = useHistory();
    function Log(){
       history.push('/Hooks');
    }

    return(
<React.Fragment >
<div className='HomeFrag'>
        <div className="Home">
            <h1 style={{color:'lightblue',textAlign:'center'}}> HOME PAGE OF REACT</h1>
            <div className="App-logo">
            </div>
            <br/>
            <img src={logo} style={{width:'20%'}}/>
        </div>
           <img src=" " style={{widht:'40%',marginBottom:'35%',marginLeft:'30%'}}/>
        {/* <div style={{margin:'-25%', marginLeft:'37%',}}>
           <h1>Customer Review and Testimonials</h1>
           <img src={fivestar} />        */}
        {/* </div>  */}
<Button variant="outlined" color="secondary" onClick={Log}>
   Login
</Button>
</div>
</React.Fragment>

    );
}




export default Home;
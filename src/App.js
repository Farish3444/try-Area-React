// import logo from './logo.svg';
import Login from './LoginForm';
import NavBar from './NavBar';
import Home from './Home';
import product from './product';
import NotFound from './NotFound';
import ProductDetails from './ProductDetails';
import product1 from './product1';
import Hooks from './Hooks';
import Table from './Table';
import Input from './Input';
import useEffectFun from './useEffectFun';
import TableWithJson from './TableWithJson';
import TodoHooks from './TodoHooks';
import ReactTable from './ReactTable';
import CallBackEnd from './CallBackEnd';
import https from './Services/httpServer';
import PracticeField from './PracticeField';
import BreakingBad from './BreakingBadAPI/BreakingBad';
import Paginates from './PaginationReact/Paginates';
// 
import React from 'react';
import './App.css';
import logo from './logo.svg';
import {
Route,
Switch,
Link,
Redirect
} 
from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// -------------------- / / / /
function App() {
  return (
    <div>
    <ToastContainer />
      <NavBar/>
      <div className="container">
      <Switch>
      <Route path= '/BreakingBad' component={BreakingBad}/>
      <Route path='/Table' component={Table} />
      <Route path='/Login' component={Login}/>     
      <Route path="/products" component={product}/>
      <Route path="/ProductDetails" component={ProductDetails}/>
      <Route path="/" exact component={Home}/>
      <Route path="/not-found" component={NotFound}/>
      <Route path="/product1" component={product1}/>
      <Route path="/Hooks" component={Hooks}></Route>
      <Route path='/useEffectFun' component={useEffectFun}/>
      <Route path ="/PracticeField" component={PracticeField}/>
      <Route path='/TableWithJson' exact component={TableWithJson}></Route>
      <Route path='/TodoHooks' component={TodoHooks}></Route>
      <Route path='/ReactTable' component={ReactTable}/>
      <Route path='/CallBackEnd' component={CallBackEnd}/>
      <Route path='/Paginates' component={Paginates}/>
      <Redirect to="/not-found"/>
      </Switch>
      </div>
    </div>
  );
}






export default App;
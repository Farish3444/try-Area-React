import { render } from '@testing-library/react';
import React from 'react';
import { Link, NavLink,useHistory} from 'react-router-dom';
// import { NavLink } from 'react-bootstrap';
// import React, { Component } from 'react';
import useEffectFun from './useEffectFun';


function NavBar(){

    return(
        <div>
            <ul className='ul'>
                <li>
                <NavLink to="/" >Home</NavLink>
                </li>
                <br/>
                <li>
                <NavLink to="/products" >product</NavLink>
                </li>
                <br/>
                <li>
                <NavLink to="/Login">Login Form</NavLink>
                </li>
                <br/>
                <li>
                    <NavLink to="/Hooks">Hooks Login Form</NavLink>
                </li>
                <br/>
                <li>
                    <NavLink to="/Table">Table</NavLink>
                </li>
     <br/>
                <li>
                   <NavLink to="/useEffectFun">useEffect Hooks</NavLink>
                </li>
                <br/>
                <li>
                   <NavLink to="/TableWithJson">Json Table</NavLink>
                </li>
                <br/>
                <li>
                   <NavLink to="/TodoHooks">TodoHooks</NavLink>
                </li>
                <br/>
                <li>
                   <NavLink to="/ReactTable">ReactTable</NavLink>
                </li>
                <br/>
                <li>
                   <NavLink to="/CallBackEnd">Calling BackEnd Services</NavLink>
                </li>
                <br/>
                <br/>
                <li>
                   <NavLink to="/BreakingBad">BB Quotes API</NavLink>
                </li>
                <br/>
                <li>
                   <NavLink to='/Paginates'>Pagination Component</NavLink>
                </li>
                <br/>
                <li>
                   <NavLink to="/PracticeField">Demo Practice</NavLink>
                </li>
                <br/>
            </ul>
        </div>
    );
}





export default NavBar;
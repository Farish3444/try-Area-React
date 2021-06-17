import React, {useState, useEffect, useForm } from 'react';
import { useHistory } from 'react-router-dom';
import './CompCss.css';




function Hooks(){

    const [form, setform] = useState({
        firstName:"",
        lastName:"",
        email:"",
        emailError:""
    });

    const [strength, setstrength] = useState(false);

    const handleFirstname=(e)=>{
        setform({...form, firstName : e.target.value})
    }
     
    const handleLastname = (e)=>{
        setform({...form,lastName:e.target.value});
    }

    const handleEmail = (e) => {
        setform({...form,email:e.target.value});
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(form.firstName && form.lastName && form.email){
            setvalid(true);
            console.log(form);
        }
        setsubmit(true);
    }

    const [submit, setsubmit] = useState(false);
    const [valid, setvalid] = useState(false);
    const [length, setlength] = useState(false);
  
    // console.log(form.email.length<5)

    return(
        <div>
            <form style={{textAlign:'center'}} className='register-form' onSubmit={handleSubmit}>
        
    {submit && valid ? <div class="success-message">Success! Thank you for registering mr.{form.firstName}</div> : null}
        <br/>
        <input
        
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleFirstname}
        />
        {submit && !form.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        {/* { (form.firstName.length < 5) ? <span id='first-name-error'>low strength - it must be more than 5</span>:null} */}
        <br/>
       
        
        <input  
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleLastname}
        />
       {submit && !form.lastName ? <span id="last-name-error">Please enter a last name</span>:null}
        <br/>
        
        <input        
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleEmail}
        />  
       {/* {!form.email.length < 5 ? <span>Less characters</span>:<span></span>} */}
       {/* {submit && !form.email ? <span id="email-error">Please enter valid email address</span>: null} */}
       {submit && !form.email.includes('@') ? <span>Invalid Email</span>:null}
       {submit && form.email.length<6 ? <span>Less characters</span>:null}
        <br/>
        <button class="form-field" type="submit">
          Register  
        </button>
      </form>
        </div>
    );
}




export default Hooks;
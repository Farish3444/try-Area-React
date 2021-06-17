import React, {useState, useEffect, useForm } from 'react';
// import { useForm } from 'react-hook-form';




function LoginForm(){

  const [form, setform] = useState({
    firstName:'',
    password:''
  });

  
const handleName=(e)=>{
    setform({...form,firstName:e.target.value});
  }

const handlePassword=(e)=>{
    setform({...form,password:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
    if (form.firstName && form.lastName){
      setValid(true)
    }
    setsubmit(true);
    alert('thank you for submitting')
  }

  // empty alert
  const [Valid, setValid] = useState(false);
  const [submit,setsubmit] = useState(false);


  return(
    <div>
    <form onSubmit={handleSubmit} style={{textAlign:'center'}}>
<input
  placeholder='enter your name here'
  type='text'
  onChange={handleName}
  name='firstName'
  value={form.firstName}
  />
  {submit && !form.firstName ? <p style={{color:'red'}}>enter valid user name</p> :null}
  
  <br/>
  <input
    placeholder='enter password'
    type='password'
    onChange={handlePassword}
    value={form.lastName}
    name='lastName'
  />
  <br/>
  {submit && !form.password ? <p style={{color:'red'}}> enter Password to Login</p>:null}

  <button onClick={handleSubmit}>Submit</button>
  {form.password && form.firstName && submit ? <p>Registration is Done{form.firstName}</p>:null}
    </form>
    </div>
  );
}

export default LoginForm;
  

import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Hook/useFirebase';
import {  useState } from "react"
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth';

import "./Login.css";

const Login = () => {
    const {signInUsingGoogle,createNewUserByEmail} = useFirebase();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [setError] = useState('')
  const [isLogin] = useState(false)
 
const auth = getAuth()

  const handleRegister = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('password must be at least 6 characters long.')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
setError('Password Must contain 2 upper case');
return;
    }
    if(isLogin){
      processLogin(email,password);
    }
    else{
      registerNewUser(email,password);
    }
    
  }
  const processLogin = (email,password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((result) => {
     const user = result.user;
     console.log(user);
     setError('Successfully Log In !!Now Go To Another Page');
    })
    .catch((error) => {
      setError(error.message);
    });
  }

    const registerNewUser = (email,password)=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
          const user =result.user;
          createNewUserByEmail()
          console.log(user)
          setError('Successfully Sign In!!Now Go To Another Page');
          verifyEmail();
      })
      .catch(error =>{
        setError("already use this email")
      })
     
    }
    const handleResetPassword = () =>{
      sendPasswordResetEmail(auth,email)
      .then(result =>{

      })
    }
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result =>{
        console.log(result);
      })
    }
    
    
    
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    
  } 
    return (
        <>
           <div className='signup-img p-5'></div>
           <h1 className=' p-5  pragraph-weight  text-center'>Login</h1>
           <div className='container'>
               <div className='row'>
                   <div className='col-lg-g col-md-6 col-sm-12'>
                       
                       <p className='pragraph-weight'>Username or E-Mail</p>
                       <input
                  required
                className=" mb-3 p-3 col-lg-6 col-md-6 col-12 cursor w-100 shadow"
                placeholder="E-Mail"
                type="text"
                onChange={handleEmailChange}
              /></div>
                   <div className='col-lg-g col-md-6 col-sm-12'>
                       
                       <p className='pragraph-weight '>Password</p>
                       <input
                  required
                className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-100 cursor shadow"
                placeholder="Password"
                type="text"
                onChange={handlePasswordChange}
              /></div>
                  
              
              
              <div className='col-lg-12 col-md-12'>
                  <p onClick={handleRegister} className='bg-primary text-center cursor pragraph-weight text-light p-2  mt-4 box-shadow'>SIGN UP</p>
                  <p  className='text-primary pragraph-weight   ' onClick={handleResetPassword}>Forgot Password? </p>
              </div>
              <div className='col-lg-6 col-md-6 col-lg-12'> <p  onClick={signInUsingGoogle} className='text-dark w-25 pragraph-weight bg-light   p-2 box-shadow cursor'> <i class="fa-brands fa-google text-primary mx-3 fa-2x"></i> Continue With Google</p></div>
              <br/>
             
              {/* <div className='col-lg-6 col-md-6 col-lg-12'> <p className='text-light pragraph-weight  w-25 bg-primary p-2 box-shadow  mb-3  cursor'><i class="fa-brands fa-github text-light mx-3 fa-2x"></i> Continue With Github</p></div> */}
               </div>
               <hr/>
               <NavLink className="navslink" as={NavLink} to="/signup">
               <p  className='text-center  cursor pragraph-weight mb-5 '>Do Not Have An Account ? Please Create Account</p>
               </NavLink>
             
           </div>
           
        </>
    );
};

export default Login;
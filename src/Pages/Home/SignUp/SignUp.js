import React from "react";
import "./SignUp.css";
import { NavLink } from 'react-router-dom';
// import useAuth from "../Hook/useAuth";
import useFirebase from "../Hook/useFirebase";
import {  useState } from "react"
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth';

const SignUp = () => {
  const {signInUsingGoogle,createNewUserByEmail} = useFirebase();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
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
      <div className="signup-img"></div>
      <h1 className='   pragraph-weight  text-center mt-5'><span className="heading-color2">Sign</span>  <span className="heading-color1">Up</span> </h1>
      <div className="container">
        <div className="row">
          <p className="pragraph-weight mb-5 mt-5">
            After creating an account, you'll be able to track your payment
            status, track the confirmation and you can also rate the tour after
            you finished the tour.
          </p>
          
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="pragraph-weight mb-2">UserName*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="UserName"
              type="text"
            />
            <p className="pragraph-weight mt-3 mb-2">Password*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Password"
              type="text"
              onChange={handlePasswordChange}
            />
            <p className="pragraph-weight mt-3 mb-2 ">First Name*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="pragraph-weight  mb-2">Email*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Email"
              type="text"
              onChange={handleEmailChange} 
            />
            <p className="pragraph-weight mt-3 mb-2 ">Confirm Password*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Confirm Password"
              type="text"
            />
            <p className="pragraph-weight mt-3 mb-2">Last Name*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className="col-lg-6 col-md-6">
          <p className='text-danger pragraph-weight    '>{error}</p>
            <p onClick={handleRegister} className="btn-color2  text-center cursor pragraph-weight text-light w-75 p-2   mt-2 box-shadow">
              Sign Up
            </p>
            
          </div>
          <div className="col-lg-6 col-md-6">
          <p className="btn-color1 text-center cursor pragraph-weight text-light w-75 p-2   mt-2 box-shadow" onClick={signInUsingGoogle}>
              Google Sign In
            </p>

          </div>
          <p  className='text-primary pragraph-weight   ' onClick={handleResetPassword}>Forgot Password? </p>
          <hr className="mt-5"/>
          <NavLink className="navslink" as={NavLink} to="/login">
               <p  className='text-center  cursor pragraph-weight mb-5 '>Already A Member? Please Login</p>
               </NavLink>
        </div>
      </div>
    </>
  );
};

export default SignUp;

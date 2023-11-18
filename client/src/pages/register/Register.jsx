import { useRef, useState } from 'react'
import './register.scss'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");

  const emailRef=useRef();
  const passwordRef=useRef();
  const usernameRef=useRef();

  const navigate = useNavigate(); // Add useNavigate here

  const handleStart=()=>{
    setEmail(emailRef.current.value)
  }

  axios.defaults.withCredentials=true;
  const handleFinish=async(e)=>{
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post('https://netflix-api-phi.vercel.app/register/',{email,username,password});
      navigate('/login'); // Replace history.push with navigate
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
            {/* <button className='loginButton'>Sign In</button> */}
            </div>
        </div>
        <div className="container">
            <button className='loginButton' onClick={() => navigate('/login')}>Sign In</button>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            {
              !email ? (
                <div className="input">
                    <input type="email" placeholder='email address' ref={emailRef}/>
                    <button className='registerButton' onClick={handleStart}>Get Started</button>
                </div>
              ):(
                <form className="input">
                <input type="username" placeholder='username' ref={usernameRef}/>
                <input type="password" placeholder='password' ref={passwordRef}/>
                <button className='registerButton' onClick={handleFinish}>Start</button>
            </form>
              )}
        </div>
    </div>
  )
}

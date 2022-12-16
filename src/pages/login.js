import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer"

export default function Login(){
  const navigate = useNavigate();
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password:data.get('password'),
    });
      await axios.post(`https://naracreative.up.railway.app/login`,{
        email:data.get('email'),
        password:data.get('password'),
      })
      .then (function(response){
        console.log(response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.userid)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('email', response.data.email)
        navigate('/profile');
      })
      .catch(function(error){
        console.log(error);
        alert('Gagal Login !!!')
      });
  };
  return(
    <>
    <Navbar/>
    <div className="registerpage">
      <h1>Login Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nama">Email
          <input type="text" id="email" name="email" required/>
        </label>
        <label htmlFor="nama">Password
          <input type="password" id="password" name="password" required/>
        </label>
        <div id="buttonsubmit" className="button">
          <button type="submit"><span></span>SUBMIT</button>
        </div>
      </form>
      <p>Don't have an account?</p>
          <div id ="buttonregister" className ="button">
            <button type ="register"><a href="/register">Sign Up</a></button>
          </div>
    </div>
    <Footer/>
    </>
  )
}

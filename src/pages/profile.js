import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import './style.css';

export default function Profile() {
  const navigate = useNavigate();
  const [isLogin, setIslogin]=React.useState(false)
  const [user, setUser] = React.useState({

  })
  React.useEffect(()=>{
    let name  = localStorage.getItem('name')
    let id    = localStorage.getItem('id')
    let email = localStorage.getItem('email')
    let token = localStorage.getItem('token')

    const verifikasi = async()=>{
      try{
        const response = await axios.post(`https://naracreative.up.railway.app/verifikasi`,{token:localStorage.getItem('token')})
        console.log(localStorage.getItem('token'))
        if (response.status==200){
          setIslogin(true)
        }
        else {
          navigate('/login')
        }
      } catch(error){
        console.log(error)
      }
    }

    verifikasi()
    setUser(existingValues =>({
      ...existingValues,
      id : localStorage.getItem('id'),
      username : localStorage.getItem('username'),
      email : localStorage.getItem('email')
    }));
  },[]);

  const handleToHome = ()=>{
    window.location.href='/';
  };
  const handleLogout = async()=>{
    localStorage.removeItem('user');

    await axios.post('https://naracreative.up.railway.app/logout',{
      jwt:localStorage.getItem('token')
    })
    .then((_res)=>{
      alert("Berhasil Logout");
    })
    window.location.href='/login';
  }
  if (!isLogin){
    return (
      <>
      <Navbar/>
      <div class="profile">
        <h2>Profile User</h2>
        <p>Username : {user.username}</p>
        <p>ID : {user.id}</p>
        <p>Email : {user.email}</p>
      </div>
      <Footer/>
      </>
    )
  }
}
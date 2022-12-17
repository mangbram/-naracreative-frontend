import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // const username = data.get("username");
    // const password = data.get("password");
    // const email = data.get("password");
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      email: data.get("email")
    });
    try {
      await axios.post(`https://naracreative.up.railway.app/register`, {
        username: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
      });
      alert("Register Berhasil !!")
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Gagal !!!");
    }
  };
  return (
    <>
      <Navbar />
      <div class="registerpage">
        <h1>Register Account</h1>
        <form onSubmit={handleSubmit}>
          <label for="username">
            Username
            <input type="text" id="username" name="username" required />
          </label>
          <label for="email">
            Email
            <input type="text" id="email" name="email" required />
          </label>
          <label for="password">
            Password
            <input type="password" id="password" name="password" required />
          </label>
          <div id="buttonsubmit" class="button">
            <button type="submit">
              <span></span>SUBMIT
            </button>
          </div>
        </form>
        <p>Already have an account?</p>
          <div id ="buttonlogin" class ="button">
            <button type ="login"><a href="/login">Sign In</a></button>
          </div>
      </div>
      <Footer/>
    </>
  );
}

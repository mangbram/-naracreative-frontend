import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import './style.css';
import logo from './image/logo.png'
import Footer from "./footer";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="homepage">
      <img id="logo" src={logo}></img>
        <h1>RESIMEN KORPS<br></br>KADET MAHASISWA<br></br></h1>
        <div id="buttonhome"className="button">
          <button type="button"><a href="/register">DAFTAR UKM</a></button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

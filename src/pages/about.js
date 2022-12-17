import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import './style.css';
import imgkmg from './image/komang.JPG'
import imgrfq from './image/rifqi1.JPG'
import imgslv from './image/selvi.JPG'

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <div class="about">
        <h1>About Us</h1>
        <div class="fotoabout">
        <div class="komang">
        <img class="fotoabout" id="imgkmg" src={imgkmg}></img>
        <h3>I Komang Tri Cahya Bramantara</h3>
        <h3>320200401010</h3>
        </div>
        <div class="rifqi">
        <img class="fotoabout" id="imgrfq" src={imgrfq}></img>
        <h3>Muhammad Rifqi Fauzan</h3>
        <h3>320200401017</h3>
        </div>
        <div class="selvi">
        <img class="fotoabout"  id="imgslv" src={imgslv}></img>
        <h3>Nanda Selviana Putri</h3>
        <h3>320200401018</h3>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
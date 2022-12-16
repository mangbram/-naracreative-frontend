import "./App.css";
import {Router, Routes, Route  } from "react-router-dom";
import { Login, Profile, Register, UKM, About} from "./pages/Index";
import Home from "./pages/home.js";

function App() {
  return (
    <>
  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/ukm" element={<UKM />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      
    </>
  );
}

export default App;

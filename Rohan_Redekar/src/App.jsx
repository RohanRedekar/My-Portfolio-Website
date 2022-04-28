import { useState } from "react";
import "./App.css";
// import "../node_modules/";
import Button from "@mui/material/Button";
import Navbar from "./components/navbar";
import { Intro } from "./components/intro";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Steper } from "./components/stepper";
import { Projects } from "./components/projects";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <About />
      <Steper />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;

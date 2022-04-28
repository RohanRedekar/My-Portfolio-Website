import { Button } from "@mui/material";
import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const resume_link =
    "http://drive.google.com/file/d/17s-uHeTxvIqhJBFrfOd8V5MHoByAswXF/view?usp=sharing";
  return (
    <div>
      <div>
        <nav>
          <div className="resume_btn">
            <a href={resume_link}>
              <Button color='inherit' variant='outlined'>
                Resume
              </Button>
            </a>
          </div>
          <div className="navigations">
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Blogs</p>
            <p>Contact</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import { Button } from "@mui/material";
import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [text, setText] = useState("Resume");

  const resume_link =
    "http://drive.google.com/file/d/17s-uHeTxvIqhJBFrfOd8V5MHoByAswXF/view?usp=sharing";

  const toggleNavList = (id) => {
    var element = e.target.id;
    if (element) {
      element.scrollIntoView();
    }
  };

  const showText = () => {
    setText("Download");
  };

  const hideText = () => {
    setText("Resume");
  };

  return (
    <div id='navbar' className='navbar'>
      <div>
        <nav>
          <div className='resume_btn'>
            <a href={resume_link}>
              <Button
                onMouseEnter={showText}
                onMouseLeave={hideText}
                color='inherit'
                variant='outlined'
              >
                {text}
              </Button>
            </a>
          </div>
          <div className='navigations'>
            <p>
              <a href='#about' onClick={() => toggleNavList("#about")}>
                About
              </a>
            </p>
            <p>
              <a href='#skills' onClick={() => toggleNavList("#skills")}>
                Skills
              </a>
            </p>
            <p>
              <a href='#projects' onClick={() => toggleNavList("#projects")}>
                Projects
              </a>
            </p>
            <p>
              <a href='#blogs' onClick={() => toggleNavList("#blogs")}>
                Blogs
              </a>
            </p>
            <p>
              <a href='#contact' onClick={() => toggleNavList("#contact")}>
                Contact
              </a>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import '../css/Home.css';
import { FaBeer } from 'react-icons/fa';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FiLinkedin, FiMail, FiFile, FiFileText, FiGithub } from "react-icons/fi";

function Home() {
  return (
    <div>
      <div className="container">
        {/* <img
          className="profile-img"
          src="https://via.placeholder.com/150"
          alt="Pascal Michaillat"
        /> */}
        <img className="profile-img" draggable="false" src="https://pascalmichaillat.org/picture.jpeg" alt="Pascal Michaillat" title="Pascal Michaillat" height="160" width="160"></img>
        <h1 className="name">Pascal Michaillat</h1>
        <p className="description">
          I am an Associate Professor of Economics at the University of
          California, Santa Cruz. I research why economic slack—especially
          unemployment—exists, why it fluctuates over the business cycle, and
          how macroeconomic policies should respond to such fluctuations.
        </p>

        <div className="social-icons">
          <a href="#">
            <FiFileText className="icon" />
          </a>
          <a href="#">
            <FiMail className="icon" />
          </a>
          <a href="#">
            <FiLinkedin className="icon" />
          </a>
          <a href="#">
            <FiGithub className="icon" />
          </a>
        </div>

        <div className="buttons">
          <button className="button">Papers</button>
          <button className="button">Courses</button>
          <button className="button">Design</button>
          <button className="button">Tags</button>
          <button className="button">Archive</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

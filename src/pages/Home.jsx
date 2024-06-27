import React from "react";
import '../css/Home.css';
import config from '../config.json';
import { FiLinkedin, FiMail, FiFileText, FiGithub } from "react-icons/fi";

function Home() {
  return (
    <div>
      <div className="container">
        <div>
          <img className="profile-img" draggable="false" src={config.profile_img} alt={config.name} />
          <h1 className="name">{config.name}</h1>
          <p className="description">{config.description}</p>
        </div>
        <div className="social-icons">
          <a href={config.cv}>
            <FiFileText className="icon" />
          </a>
          <a href={config.email}>
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

import React from "react";
import '../css/Home.css';
function Home() {
  return (
    <div>
      <div className="container">
        <img
          className="profile-img"
          src="https://via.placeholder.com/150"
          alt="Pascal Michaillat"
        />
        <h1 className="name">Pascal Michaillat</h1>
        <p className="description">
          I am an Associate Professor of Economics at the University of
          California, Santa Cruz. I research why economic slack—especially
          unemployment—exists, why it fluctuates over the business cycle, and
          how macroeconomic policies should respond to such fluctuations.
        </p>

        <div className="social-icons">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0-1.1.9-2 2-2h.6M7 20h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 2l4 4m0 0l-4 4m4-4H7m5 4v11m-4-4h8"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h8m4 0h.01M8 12V8m4 4v4m0-8h.01m-4 0H8m8 0h.01M5 5h.01M12 12V8m0 4v4m0-8h.01"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.536 8.464a5 5 0 00-7.072 0l-1.415 1.414a5 5 0 000 7.072l1.414 1.415a5 5 0 007.072 0l1.415-1.414a5 5 0 000-7.072l-1.414-1.415z"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 9V7a4 4 0 10-8 0v2M7 9h10v10a4 4 0 01-4 4H7a4 4 0 01-4-4V9h4zm4-7v2m0 4v2m0-4h4m-4 0H7"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"
              />
            </svg>
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

import React from "react";
import Header from "../Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="main-home">
      <Header></Header>
      <div className="home-contain">
        {/* Div 1 */}
        <div className="div-1">
          <h1> Welcome to 365HRMS</h1>
          <h5>Powering Your HR Success</h5>
          <p>
            At 365HRMS, we believe in transforming HR processes into a dynamic
            force that manages and propels your workforce toward unparalleled
            success. Our cloud-based HR platform is designed to infuse energy
            into your organization, triggering robust business growth and
            fostering a culture of excellence.
          </p>
          <button>Start my free trial</button>
        </div>

        {/* DIV 2 */}
        <div className="div-2">
          <div className="dot"> </div>
          <img src="./Images/Untitled design (7) 1.png" alt="" />
        </div>
      </div>

      <div className="bottom-div">
        <div className="b-head">
          <h2>200+</h2>
          <p>Companies</p>
        </div>
        <div className="b-head">
          <h2>200+</h2>
          <p>Companies</p>
        </div>
        <div className="b-head">
          <h2>200+</h2>
          <p>Companies</p>
        </div>
        <div className="b-head">
          <h2>200+</h2>
          <p>Companies</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

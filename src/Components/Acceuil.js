import React, { useState } from "react";
import "./Acceuil.css";
import logo from "./images/ouess.jpg";

const Acceuil = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });
  return (
    <div>
      <div className="waw">
        <h1>A M I N E</h1>
      </div>
      <div className="nav">
        <li style={{ textDecoration: "line-through" }}>WORKS</li>
        <li>CONTACT</li>
      </div>
      <div className="mainRight">
        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />
      </div>
      <div className="mainMiddle">
        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />
      </div>

      <div className="mainLeft">
        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />

        <img src={logo} />
      </div>

      <div className="bott">
        <h5 className="smill">
          ILLUSTRATOR & GRAPHIC DESIGNER ,FOUNDER OF SIRIUS MARKETING.
        </h5>
        <h1>OUESLATI</h1>
      </div>
      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
    </div>
  );
};

export default Acceuil;

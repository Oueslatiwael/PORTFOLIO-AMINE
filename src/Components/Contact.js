import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <div>
      <div className="niv">
        <li>WORKS</li>
        <li style={{ textDecoration: "line-through" }}>CONTACT</li>
      </div>
      <div className="mail">
        <h2>OUESS.AMINE</h2>
        <h2> @GMAIL.COM</h2>
      </div>
      <div className="social">
        <li>INSTAGRAM</li>
        <li>BEHANCE</li>
        <li>FACEBOOK</li>
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

export default Contact;

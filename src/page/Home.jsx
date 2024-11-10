import React from "react";
import SocialIcons from "../component/SocialIcon";
import profilepic from "../assets/profile-pic.jpg";

export default function Home() {
  const linkStyle = { color: "inherit", textDecoration: "none" };
  return (
    <div style={{ padding: "60px" }}>
      <div style={{ marginTop: "60px" }}>
        <img src={profilepic} alt="profile pic" width="300" height="400" />
      </div>
      <h1 style={{ color: "black" }}>Anish Hegde</h1>
      <p>Exploring one day at a time.</p>
      <div>
        <SocialIcons />
      </div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          fontSize: "31px",
        }}
      >
        <a
          href="https://drive.google.com/file/d/1X3ZVfaGYdmj9eKNU4JdS5k8sQUb9Pe2m/view?usp=sharing"
          style={linkStyle}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        {/* <a href="" style={linkStyle}>
          Project
        </a> */}
        <a
          href="https://docs.google.com/spreadsheets/d/19eSMeadP2v6TbMUOlcDaztG-tpHgOFkAjYAc9kilikY/edit?usp=sharing"
          style={linkStyle}
          target="_blank"
          rel="noreferrer"
        >
          Reading-List
        </a>
        <a href="/#/about" style={linkStyle}>
          About
        </a>
      </div>
    </div>
  );
}

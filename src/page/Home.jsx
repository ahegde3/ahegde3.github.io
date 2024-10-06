import React from "react";
import SocialIcons from "../component/SocialIcon";

export default function Home() {
  const linkStyle = { color: "inherit", textDecoration: "none" };
  return (
    <div>
      <div style={{ marginTop: "60px" }}>
        <img src="https://avatars.githubusercontent.com/u/20241972?s=400&u=a6cfbaebeeb8d1469c1998d93434adea679324dc&v=4" />
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
          // target="_blank"
        >
          Resume
        </a>
        <a href="" style={linkStyle}>
          Project
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/19eSMeadP2v6TbMUOlcDaztG-tpHgOFkAjYAc9kilikY/edit?usp=sharing"
          style={linkStyle}
          // target="_blank"
        >
          Reading-List
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
      </div>
    </div>
  );
}

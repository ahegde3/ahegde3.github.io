import React from "react";
import SocialIcons from "../component/SocialIcon";

export default function Home() {
  return (
    <div>
      <div style={{ marginTop: "60px" }}>
        <img src="https://avatars.githubusercontent.com/u/20241972?s=400&u=a6cfbaebeeb8d1469c1998d93434adea679324dc&v=4" />
      </div>
      <h1 style={{ color: "white" }}>Anish Hegde</h1>
      <p>Frontend Developer</p>
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
        <a href="https://drive.google.com/file/d/1X3ZVfaGYdmj9eKNU4JdS5k8sQUb9Pe2m/view?usp=sharing">Resume</a>
        <a href="">Project</a>
        <a href="">Reading list</a>
        <a href="">About</a>
      </div>
    </div>
  );
}

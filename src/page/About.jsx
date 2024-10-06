import React from "react";

export default function About() {
  return (
    <div style={{ textAlign: "left", paddingLeft: "20%", width: "50%" }}>
      <h1 style={{ fontSize: "60px" }}>About</h1>
      <span>Enjoys coding, reading and travelling</span>

      <p>
        I am a software developer with a track record of developing software
        products from initial concept to final implementation. A career
        consisting of working with startups and corporate tech in domains
        ranging from Biotech,Edtech and Internet Of Things. I like building
        things end to end and consider myself as a fullstack engineer. Apart
        from my professional life, I enjoy reading, travelling and exploring new
        places.
      </p>
      <blockquote>"A day not spent out is day wasted"</blockquote>

      <span>Things I am exploring</span>
      <ul>
        <li>Ukulele</li>
        <li>Space Lighting</li>
        <li>DevOps</li>
        <li>Large Language Model</li>
        <li>IoT</li>
      </ul>
    </div>
  );
}

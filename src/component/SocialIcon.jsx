import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
// import "./SocialIcons.css"; // Make sure to create this file

const SocialIcons = () => {
  let iconStyles = { color: "black", fontSize: "1.5em" };
  return (
    <div
      className="social-icons"
      style={{ display: "flex", justifyContent: "center", gap: "30px" }}
    >
      <a
        href="https://www.instagram.com/ahegde3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} style={iconStyles} />
      </a>
      <a
        href="https://github.com/ahegde3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} style={iconStyles} />
      </a>
      <a
        href="https://www.linkedin.com/in/anish-hegde-940823120/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} style={iconStyles} />
      </a>
      <a href="mailto:name@email.com" target="_blank" rel="noopener noreferrer">
        <BiLogoGmail size={30} style={iconStyles} />
      </a>
    </div>
  );
};

export default SocialIcons;

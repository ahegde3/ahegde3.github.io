import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export function Contact() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="footer">
      {/* Top row: links + socials */}
      <div className="footer-inner">
        <div className="footer-links">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                font: "inherit",
                color: "inherit",
                fontSize: "inherit",
              }}
            >
              {link.name}
            </button>
          ))}
          <a
            href="mailto:ahegde3@gmail.com"
            style={{ color: "inherit" }}
          >
            Contact
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/ahegde3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/anish-hegde-940823120/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:ahegde3@gmail.com"
            aria-label="Email"
          >
            <BiLogoGmail size={16} />
          </a>
        </div>
      </div>

      {/* Pixel art footer */}
      <div className="footer-art">
        <img
          src="/footer-pixel-art.png"
          alt="Pixel art cityscape"
          loading="lazy"
        />
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© Anish Hegde {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

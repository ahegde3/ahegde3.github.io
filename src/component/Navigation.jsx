import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    {
      name: "Reading",
      href: "https://docs.google.com/spreadsheets/d/19eSMeadP2v6TbMUOlcDaztG-tpHgOFkAjYAc9kilikY/edit?usp=sharing",
      external: true,
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleClick = (item) => {
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <>
      {/* Desktop floating pill nav */}
      <nav
        className="nav-pill hidden md:flex"
        style={{
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.1)"
            : "0 2px 20px rgba(0,0,0,0.06)",
        }}
      >
        <button
          onClick={() => scrollToSection("#home")}
          style={{
            padding: "0.5rem 0.75rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <line x1="3" y1="12" x2="7" y2="12" />
            <line x1="17" y1="12" x2="21" y2="12" />
            <line x1="12" y1="3" x2="12" y2="7" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </button>

        {navItems.map((item) => (
          <button key={item.name} onClick={() => handleClick(item)}>
            {item.name}
          </button>
        ))}

        <ThemeToggle />

        <button
          className="nav-cta"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1X3ZVfaGYdmj9eKNU4JdS5k8sQUb9Pe2m/view?usp=sharing",
              "_blank"
            )
          }
        >
          Download CV
          <ChevronRight size={14} />
        </button>
      </nav>

      {/* Mobile nav */}
      <nav
        className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-4 py-3 rounded-full"
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--border)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        }}
      >
        <button
          onClick={() => scrollToSection("#home")}
          className="text-sm font-medium"
          style={{ color: "var(--foreground)" }}
        >
          AH
        </button>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-1"
            style={{ color: "var(--foreground)" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="md:hidden fixed top-16 left-4 right-4 z-50 rounded-2xl p-4 flex flex-col gap-2"
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors"
              style={{ color: "var(--foreground)" }}
            >
              {item.name}
            </button>
          ))}
          <button
            className="mt-1 py-2 px-4 rounded-full text-sm font-medium text-center"
            style={{
              background: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1X3ZVfaGYdmj9eKNU4JdS5k8sQUb9Pe2m/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download CV
          </button>
        </div>
      )}
    </>
  );
}

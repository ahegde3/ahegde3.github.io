import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    {
      name: "Resume",
      href: "#resume",
    },
    {
      name: "Reading",
      href: "https://docs.google.com/spreadsheets/d/19eSMeadP2v6TbMUOlcDaztG-tpHgOFkAjYAc9kilikY/edit?usp=sharing",
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleClick = (href, name) => {
    if (name === "Reading") {
      window.open(href, "_blank");
    } else {
      scrollToSection(href);
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleClick("/", "Home")}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Anish Hegde
          </button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href, item.name)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href, item.name)}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

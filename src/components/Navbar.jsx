import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar-custom">
      <div className="container nav-wrapper">
        <a href="#home" className="brand">
          Ashna Arif
        </a>

        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>
        )}

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={() => {
              setActive("home");
              setIsOpen(false);
            }}
          >
            Home
          </a>

          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => {
              setActive("about");
              setIsOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={() => {
              setActive("skills");
              setIsOpen(false);
            }}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => {
              setActive("projects");
              setIsOpen(false);
            }}
          >
            Projects
          </a>

          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => {
              setActive("contact");
              setIsOpen(false);
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

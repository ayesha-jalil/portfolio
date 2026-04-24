import projects from "../data/projectsData";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDemo(null);
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [openDemo, setOpenDemo] = useState(null);

  return (
    <section
      id="projects"
      className="projects-section"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
    >
      <div className="container">
        <h2 className="projects-title">
          <span className="black">My </span>
          <span className="teal">Projects</span>
        </h2>

        <p className="projects-subtitle">
          A showcase of my practical work and solutions built using modern
          technologies
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i} data-aos="fade-up">
              <div className="project-img">
                <img src={p.image} alt={p.title} />

                <div className="img-overlay">
                  <button onClick={() => setSelectedImage(p.image)}>
                    View Full Image
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.file && (
                    <a
                      href={p.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-details"
                    >
                      <FaArrowUpRightFromSquare className="view-icon" />
                      View Case Study
                    </a>
                  )}

                  {p.loomLinks && (
                    <div className="demo-wrapper">
                      <span
                        className="view-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDemo(openDemo === i ? null : i);
                        }}
                      >
                        <FaPlay className="view-icon" />
                        View Demo
                      </span>

                      {openDemo === i && (
                        <div className="demo-dropdown">
                          {p.loomLinks.map((l, idx) => (
                            <a
                              key={idx}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenDemo(null)}
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage} alt="full" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

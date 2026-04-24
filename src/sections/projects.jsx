import projects from "../data/projectsData";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

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

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import {
  FaCode,
  FaServer,
  FaTools,
  FaCloud,
  FaMicrosoft,
} from "react-icons/fa";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const skillData = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: ["HTML5", "CSS3", "JavaScript", "Ajax", "jQuery", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["PHP", "Laravel", "MySQL", "APIs", "Integrations"],
    },
    {
      title: "Tools & CMS",
      icon: <FaTools />,
      skills: ["WordPress", "Wix", "Git", "Pusher"],
    },
    {
      title: "Power Platform",
      icon: <FaMicrosoft />,
      skills: [
        "PowerApps",
        "Power Automate",
        "SharePoint",
        "Dataverse",
        "Microsoft Forms",
        "Microsoft Pages",
      ],
    },
    {
      title: "Cloud & Advanced",
      icon: <FaCloud />,
      skills: [
        "Azure",
        "Blob Storage",
        "AI Search",
        "Logic Apps",
        "Web Apps",
        "Dynamics 365 Sales",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">
          <span className="black">Skills & </span>
          <span className="teal">Expertise</span>
        </h2>

        <p className="skills-subtitle">
          A comprehensive overview of my technical skills and areas of expertise
        </p>

        <div className="skills-cards">
          {skillData.map((cat, index) => (
            <div key={index} className="skill-card-wrapper" data-aos="fade-up">
              <div className="skill-card">
                <div className="card-header">
                  <span className="icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>

                <div className="skills-list">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

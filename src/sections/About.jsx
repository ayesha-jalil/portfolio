import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-wrapper">
        <div className="about-image" data-aos="zoom-in">
          <img src="/images/pic.jpg" alt="about" />
        </div>
        <div className="about-text">
          <h1 data-aos="fade-down">About Me</h1>
          <h2 className="teal" data-aos="fade-up">
            Microsoft Power Platform Developer
          </h2>

          <p data-aos="fade-up" data-aos-delay="100">
            Detail-oriented PowerApps & SharePoint Developer experienced in
            designing, developing, and managing custom business solutions.
          </p>
          <p data-aos="fade-up" data-aos-delay="100">
            Skilled in workflow automation, Microsoft service integration, and
            creating scalable, data-driven applications.
          </p>

          <a
            href="/cv.pdf"
            download
            className="btn-download"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Download CV
            <FaDownload className="download-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

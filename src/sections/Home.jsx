import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="container home-wrapper">
        <div className="home-text">
          <h2 data-aos="fade-down">Hi</h2>

          <h1 data-aos="fade-right">
            <span className="black">I'm </span>
            <span className="teal">Ashna Arif</span>
          </h1>

          <h3 data-aos="fade-left">
            <span className="black">And I'm a </span>
            <span className="role-text">
              <Typewriter
                words={["Microsoft Power Platform Developer", "Web Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p data-aos="fade-up" data-aos-delay="100">
            PowerApps & SharePoint Developer with hands-on experience in
            building custom business solutions, automating workflows, and
            developing responsive, user-friendly applications.
          </p>

          <div className="home-buttons" data-aos="zoom-in" data-aos-delay="200">
            <a href="#contact" className="btn-hire">
              Hire Me
            </a>

            <a href="#projects" className="view-btn">
              View my work <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="home-image" data-aos="zoom-in-left">
          <img src="/images/profile.jpeg" alt="profile" />
        </div>
      </div>
    </section>
  );
}

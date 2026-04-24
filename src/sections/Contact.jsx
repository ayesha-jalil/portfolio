import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [success, setSuccess] = useState(false);

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundImage: "url(/images/contact-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <div className="container contact-wrapper">
          <h2 className="contact-title" data-aos="fade-down">
            Contact Me
          </h2>

          <p className="contact-subtitle" data-aos="fade-up">
            Have a project in mind? Let’s discuss how we can bring your ideas to
            life.
          </p>

          <div className="contact-content">
            <div className="contact-left" data-aos="fade-right">
              <h2>Let's Work Together</h2>
              <p>
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
              <div className="contact-info">
                <div data-aos="fade-up" data-aos-delay="100">
                  <FaEnvelope />
                  <div>
                    <span>Email</span>
                    <p>ashnaarif6051@gmail.com</p>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                  <FaPhone />
                  <div>
                    <span>Phone</span>
                    <p>+92 302 7463063</p>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <FaMapMarkerAlt />
                  <div>
                    <span>Location</span>
                    <p>Multan, Pakistan</p>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" data-aos-delay="400">
                <p className="connect-text">Connect with me</p>

                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ashna-arif"
                    className="icon"
                  >
                    <FaLinkedin />
                  </a>

                  <a href="https://wa.me/923027463063" className="icon">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              data-aos="fade-left"
              onSubmit={(e) => {
                e.preventDefault();
                emailjs
                  .sendForm(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    e.target,
                    process.env.REACT_APP_PUBLIC_KEY,
                  )
                  .then(() => {
                    setSuccess(true);
                    e.target.reset();

                    setTimeout(() => setSuccess(false), 4000);
                  })
                  .catch((error) => {
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                  });
              }}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              />

              <button type="submit">
                Send Message
                <FaPaperPlane style={{ marginLeft: "8px" }} />
              </button>
              {success && (
                <p className="success-msg">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

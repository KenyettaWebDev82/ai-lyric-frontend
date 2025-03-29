import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">📞 Get in Touch</h2>
      <p className="contact-text">
        Wanna stay connected, collab, and build some dope stuff? 🎸 <br />
        Ask me questions, or vibe about some good music... 🎶
        Follow me on my socials or check out my portfolio to see what’s next! 🎉
      </p>

      <div className="contact-info">
        <a
          href="https://www.linkedin.com/in/kenyetta-griffin-968471166/n"
          target="_blank"
          rel="LinkedIn"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" /> LinkedIn
        </a>

        <a
          href="https://github.com/PursuitMadeMe"
          target="_blank"
          rel="Github"
          className="contact-link"
        >
          <FaGithub className="contact-icon" /> GitHub
        </a>

        <a
          href="https://kenyetta-portfolio.netlify.app/"
          target="_blank"
          rel="Portfolio"
          className="contact-link"
        >
          <FaGlobe className="contact-icon" /> Portfolio
        </a>
      </div>
    </div>
  );
};

export default Contact;

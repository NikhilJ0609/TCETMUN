import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="aboutsection">
      <footer className="footer">
        <div className="footer-left">
          <img
            src="LOGO.png"
            alt="TCET MUN 2024 Logo"
            className="footer-logo"
          />
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Mail: pr.tcetmun2024@gmail.com</p>
            <p>Sahil Singh: +91 9324772737</p>
            <p>Ziyan Khan: +91 9970555820</p>
          </div>
          <p className="footer-copyright">
            Copyright © 2024 TCET MUN | All Rights Reserved
          </p>
        </div>
        <div className="footer-right">
          <h3>Follow Us At</h3>
          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/tcetmunsociety?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/tcetmun-society/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://youtube.com/@tcetmunsociety7377?si=JNN9YURaOyk37adn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/youtube.svg" alt="YouTube" />
            </a>
          </div>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.745723058145!2d72.87203067531901!3d19.206305347868675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1725438967575!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TCET MUN Location"
            ></iframe>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled Components
const HeroSection = styled.section`
  background-image: url("/images/Audi 2.jpg"); /* Your image path */
  background-size: cover; /* Ensures the image covers the full section */
  background-position: center;
  background-repeat: no-repeat; /* Avoids image repetition */
  color: white;
  width: 100%;
  padding: 100px 20px;
  position: relative;
  min-height: 70vh; /* Adjusted height for better UX on all screens */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-top: 100px;

    @media (max-width: 768px) {
      margin-top: 50px; /* Reduce margin for smaller screens */
    }
  }

  h1 {
    font-family: "Playfair Display", sans-serif;
    font-size: 3rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-family: "Playfair Display", sans-serif;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .button {
    padding: 10px 20px;
    font-size: 1.5rem;
    border: 2px solid white;
    background: transparent;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: white;
      color: black;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 8px 16px;
    }
  }
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: rgba(0, 0, 0, ${(props) => props.opacity});
  transition: background 0.3s ease;
  z-index: 10;

  .logo {
    max-width: 100px;

    @media (max-width: 768px) {
      max-width: 80px;
    }
  }

  .nav-links {
    display: flex;
    gap: 20px;
    padding-right: 15px;

    @media (max-width: 768px) {
      display: ${(props) => (props.menuOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 60px; /* Adjust according to navbar height */
      right: 10px;
      background: rgba(0, 0, 0, 0.9);
      width: 200px;
      padding: 20px;
    }
  }

  .burger-menu {
    display: none;
    cursor: pointer;
    margin-right: 20px; /* Add margin to the right to move it inward */

    @media (max-width: 768px) {
      display: block;
    }

    div {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 5px 0;
      transition: 0.3s;
    }
  }

  .navbutton {
    padding: 10px;
    text-align: center;

    a {
      color: white;
      text-decoration: none;
      font-weight: 600;

      &.active {
        color: #ffc67d;
      }

      &:hover {
        color: #ffc67d;
      }
    }

    @media (max-width: 768px) {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

const Hero = () => {
  const [opacity, setOpacity] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("section").clientHeight;
      const scrollPosition = window.scrollY;

      // Adjust opacity based on scroll position
      const calculatedOpacity = Math.min(scrollPosition / heroHeight, 1);
      setOpacity(calculatedOpacity);

      // Track active section based on scroll position
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (scrollPosition >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar opacity={opacity} menuOpen={menuOpen}>
        <img src="LOGO.png" alt="logo" className="logo" />
        <div className="burger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav-links">
          <div className="navbutton">
            <a
              href="#Hero-section"
              className={activeSection === "Hero-section" ? "active" : ""}
            >
              Home
            </a>
          </div>
          <div className="navbutton">
            <a
              href="#committees-section"
              className={activeSection === "committees-section" ? "active" : ""}
            >
              Committees
            </a>
          </div>
          <div className="navbutton">
            <a
              href="https://forms.gle/YnNngghRvCZ3fNck7"
              className={activeSection === "registration" ? "active" : ""}
            >
              Registration
            </a>
          </div>
          <div className="navbutton">
            <a
              href="/PRESS RELEASE Vol.1.pdf"
              className={activeSection === "press-release" ? "active" : ""}
            >
              Press Release
            </a>
          </div>
          <div className="navbutton">
            <a
              href="#events-section"
              className={activeSection === "events-section" ? "active" : ""}
            >
              Events
            </a>
          </div>
          <div className="navbutton">
            <a
              href="#teams-section"
              className={activeSection === "teams-section" ? "active" : ""}
            >
              Team
            </a>
          </div>
          <div className="navbutton">
            <a
              href="#aboutsection"
              className={activeSection === "aboutsection" ? "active" : ""}
            >
              About us
            </a>
          </div>
        </div>
      </Navbar>
      <section id="Hero-section">
        <HeroSection id="hero">
          <div className="content">
            <p>THE FOURTEENTH EDITION</p>
            <h1>Thakur College Of Engineering And Technology</h1>
            <p>September 27th,2024 - September 29th,2024</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfGGRpvOSzMNAZ6ThzcMY7y_ffKOElH0Wr0KI9zzcc4r__3rQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">REGISTER</button>
            </a>
            <p>Forge Alliances, Ignite Change..!!</p>
          </div>
        </HeroSection>
      </section>
    </>
  );
};

export default Hero;

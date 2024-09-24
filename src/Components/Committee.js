import React from "react";
import "./Committees.css";
import { Link } from "react-router-dom"; // Import Link from React Router

const Committee = () => {
  return (
    <section id="committees-section">
      <div className="mun-committees">
        <div className="Headcontainer">
          <h1>Committees</h1>
        </div>

        {/* Committees Section */}
        <div className="committees1">
          <div className="committee">
            <Link className="symbol" to="/Pages/UNHRC">
              <img src={"/images/unhrc.jpg"} alt="UNHRC" />
            </Link>
            <p>UNHRC</p>
            <span>United Nations Human Rights Council</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="/Pages/WTO">
              <img src={"/images/wto.png"} alt="WTO" />
            </Link>
            <p>WTO</p>
            <span>World Trade Organization</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="/Pages/UNODC">
              <img src={"/images/UNODC.jpg"} alt="UNODC" />
            </Link>
            <p>UNODC</p>
            <span>United Nations Office on Drugs and Crimes</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="/Pages/DISEC">
              <img src={"/images/disec.webp"} alt="DISEC" />
            </Link>
            <p>DISEC</p>
            <span>Disarmament and International Security Committee</span>
          </div>
        </div>

        <div className="committees2">
          <div className="committee">
            <Link className="symbol" to="/Pages/WHO">
              <img src={"/images/WHO.png"} alt="WHO" />
            </Link>
            <p>WHO</p>
            <span>World Health Organization</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="/Pages/UNOOSA">
              <img src={"/images/UNODC.jpg"} alt="UNOOSA" />
            </Link>
            <p>UNOOSA</p>
            <span>United Nations Office for Outer Space Affairs</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="/Pages/IP">
              <img src={"/images/IP1.png"} alt="IP" />
            </Link>
            <p>IP</p>
            <span>International Press</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;

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
            <Link className="symbol" to="./UNHRC">
              <img src={"https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/unhrc.webp"} alt="UNHRC" />
            </Link>
            <p>UNHRC</p>
            <span>United Nations Human Rights Council</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="./WTO">
              <img src={"https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/wto.webp"} alt="WTO" />
            </Link>
            <p>WTO</p>
            <span>World Trade Organization</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="./UNODC">
              <img src={"https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/UNODC.webp"} alt="UNODC" />
            </Link>
            <p>UNODC</p>
            <span>United Nations Office on Drugs and Crimes</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="./DISEC">
              <img src={"https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/disec.webp"} alt="DISEC" />
            </Link>
            <p>DISEC</p>
            <span>Disarmament and International Security Committee</span>
          </div>
        </div>

        <div className="committees2">
          <div className="committee">
            <Link className="symbol" to="./WHO">
              <img src={"https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/WHO.webp"} alt="WHO" />
            </Link>
            <p>WHO</p>
            <span>World Health Organization</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="./UNOOSA">
              <img src={"https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/UNODC.webp"} alt="UNOOSA" />
            </Link>
            <p>UNOOSA</p>
            <span>United Nations Office for Outer Space Affairs</span>
          </div>

          <div className="committee">
            <Link className="symbol" to="./IP">
              <img src={"https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/IP1.webp"} alt="IP" />
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

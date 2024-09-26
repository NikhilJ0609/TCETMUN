import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import Committees from "./Components/Committee";
import EVENTS from "./Components/Events";
import DAY1 from "./Components/DAY1";
import DAY2 from "./Components/DAY2";
import ProfileCardSG from "./Components/ProfilecardSG";
import Teams from "./Components/Teams";
import UNHRCPage from "./Pages/UNHRC";
import DISECPage from "./Pages/DISEC";
import Footer from "./Components/Footer";
import IPPage from "./Pages/IP";
import UNODCPage from "./Pages/UNODC";
import UNOOSAPage from "./Pages/UNOOSA";
import WHOPage from "./Pages/WHO";
import WTOPage from "./Pages/WTO";
import DAY3 from "./Components/DAY3";
// import WTOPage from './pages/WTOPage';
// Add pages for other committees similarly

function App() {
  return (
    <div className="App">
      <Router>
        {/* This is your homepage that includes Hero, ProfileCard, Committees, etc. */}
        <Routes>
          <Route
            path={"/TCETMUN"}
            element={
              <>
                <Hero />
                <ProfileCardSG />
                <Committees />
                <EVENTS />
                <DAY1 />
                <DAY2 />
                <DAY3 />
                <Teams />
                <Footer />
              </>
            }
          />

          {/* Separate committee pages */}
          <Route path="/TCETMUN/UNHRC" element={<UNHRCPage />} />
          <Route path="/TCETMUN/DISEC" element={<DISECPage />} />
          <Route path="/TCETMUN/IP" element={<IPPage />} />
          <Route path="/TCETMUN/UNODC" element={<UNODCPage />} />
          <Route path="/TCETMUN/UNOOSA" element={<UNOOSAPage />} />
          <Route path="/TCETMUN/WHO" element={<WHOPage />} />
          <Route path="/TCETMUN/WTO" element={<WTOPage />} />
          {/* Add more routes for other committee pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

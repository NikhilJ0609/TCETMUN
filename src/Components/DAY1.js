import React from "react";
import "./Events.css";
import { useInView } from "react-intersection-observer";

const DAY1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mun-opening-ceremony">
      <div className="header">
        <h2>DAY 1</h2>
      </div>
      <div className="ceremony-content">
        <p>
          The first day of the{" "}
          <strong>
            *14th edition of TCET Model United Nations (TCET-MUN)*
          </strong>{" "}
          began with an impressive display of knowledge and enthusiasm from the
          participating students. Delegates from various schools and
          universities assembled in the grand hall, representing different
          nations and prepared to debate some of the world's most pressing
          issues.
        </p>
        <p>
          The opening ceremony set a strong tone for the conference, with guest
          speakers highlighting the critical role of diplomacy, cooperation, and
          mutual understanding in tackling global challenges. The students were
          visibly eager, ready to step into the roles of diplomats and engage
          with the complex issues ahead.Following the ceremony, committee
          sessions commenced, and the debates were both engaging and insightful.
          The delegates had clearly prepared extensively, demonstrating a deep
          understanding of their assigned country's position on the various
          agenda items. Their well-researched speeches and thoughtful arguments
          showcased a commendable grasp of global affairs.
        </p>
        <p>
          Throughout the day, delegates tackled significant topics such as{" "}
          <strong>
            climate change and its effects on vulnerable regions, the
            humanitarian crises in conflict zones, and strategies to combat
            cyber warfare.
          </strong>{" "}
          The discussions were intense, with each delegate contributing unique
          perspectives and proposing innovative solutions. It was clear that the
          students were deeply invested in finding practical resolutions,
          reflecting their commitment to the MUN’s goals.
        </p>
      </div>
      <div ref={ref} className={`image-gallery ${inView ? "pop-up" : ""}`}>
        <img src="./images/6.jpeg.jpg" alt="MUN Ceremony 1" />
        <img src="./images/7.jpeg.jpg" alt="MUN Ceremony 2" />
        <img src="./images/8.jpeg.jpg" alt="MUN Ceremony 3" />
        <img src="./images/9.jpeg.jpg" alt="MUN Ceremony 4" />
        <img src="./images/10.jpeg.jpg" alt="MUN Ceremony 5" />
      </div>
    </div>
  );
};

export default DAY1;

import React from "react";
import "./Events.css";
import { useInView } from "react-intersection-observer";

const DAY3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mun-opening-ceremony">
      <div className="header">
        <h2>DAY 3</h2>
      </div>
      <div className="ceremony-content">
        <p>
          As the final day of the{" "}
          <strong>*TCET Model United Nations (TCET-MUN)* </strong>conference
          unfolded, the students' <strong>enthusiasm</strong> for debate and
          diplomacy reached its zenith. The resolutions crafted by each
          committee highlighted their deep understanding and engagement with
          various global issues. Delegates worked tirelessly to{" "}
          <strong>negotiate compromises</strong>, blending their expertise and
          creativity to develop comprehensive and feasible solutions.
        </p>
        <p>
          In the General Assembly session, where resolutions from all committees
          were presented and debated, the <strong>energy</strong> in the room
          was palpable. The students showcased remarkable{" "}
          <strong>articulation and professionalism</strong>, passionately
          defending their resolutions while being open to{" "}
          <strong>constructive feedback</strong>
        </p>
        <p>
          The closing ceremony celebrated the students'{" "}
          <strong>hard work</strong> and dedication over the past three days.
          Diplomats, teachers, and parents praised the impressive display of{" "}
          <strong>knowledge</strong>, <strong>eloquence</strong>, and{" "}
          <strong>teamwork</strong>. The TCET-MUN experience not only deepened
          the students' understanding of global issues but also instilled in
          them a sense of <strong>responsibility</strong> to contribute
          positively to the world.
        </p>
      </div>
      <div ref={ref} className={`image-gallery ${inView ? "pop-up" : ""}`}>
        <img
          src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/16.webp"
          alt="MUN Ceremony 1"
        />
        <img
          src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/17.webp"
          alt="MUN Ceremony 2"
        />
        <img
          src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/18.webp"
          alt="MUN Ceremony 3"
        />
        <img
          src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/19.webp"
          alt="MUN Ceremony 4"
        />
        <img
          src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/20.webp"
          alt="MUN Ceremony 5"
        />
      </div>
    </div>
  );
};

export default DAY3;

import React from "react";
import "./Events.css";
import { useInView } from "react-intersection-observer";

const DAY2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mun-opening-ceremony">
      <div className="header">
        <h2>DAY 2</h2>
      </div>
      <div className="ceremony-content">
        <p>
          On the <strong>second day</strong> of the{" "}
          <strong>14th edition of TCET Model United Nations (TCET-MUN),</strong>{" "}
          the students' deepening understanding of global issues became
          increasingly evident. As committees reconvened, delegates seized the
          opportunity to <strong>collaborate, negotiate,</strong> and{" "}
          <strong>forge alliances</strong> to tackle the complex challenges at
          hand.
        </p>
        <p>
          The <strong>crisis</strong> simulations truly put their knowledge and
          diplomatic skills to the test. Delegates had to think quickly and
          adapt to unexpected developments, showcasing their ability to respond
          with agility and insight. It was remarkable to see how{" "}
          <strong>well-informed</strong> they were about the intricacies of
          geopolitical events, historical contexts, and their country's stance
          on various crisis scenarios.
        </p>
        <p>
          Throughout informal discussions and lunch breaks, students engaged in{" "}
          <strong>stimulating conversations</strong> on{" "}
          <strong>cultural differences, global economics,</strong> and the
          significance of international cooperation. The{" "}
          <strong>diversity of perspectives</strong> and the eagerness to listen
          and learn from one another embodied the true spirit of MUN, fostering
          an atmosphere of <strong>mutual respect</strong> and{" "}
          <strong>open-mindedness.</strong>
        </p>
      </div>
      <div ref={ref} className={`image-gallery ${inView ? "pop-up" : ""}`}>
        <img src="/images/11.jpg" alt="MUN Ceremony 1" />
        <img src="/images/12.jpg" alt="MUN Ceremony 2" />
        <img src="/images/13.jpg" alt="MUN Ceremony 3" />
        <img src="/images/14.jpg" alt="MUN Ceremony 4" />
        <img src="/images/15.jpg" alt="MUN Ceremony 5" />
      </div>
    </div>
  );
};

export default DAY2;

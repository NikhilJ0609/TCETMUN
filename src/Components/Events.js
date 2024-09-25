import React from 'react';
import './Events.css';
import { useInView } from 'react-intersection-observer';

const EVENTS = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="events-section">
      <div className="mun-opening-ceremony">
        <div className="header">
          <h2>MUN OPENING CEREMONY</h2>
        </div>
        <div className="ceremony-content">
          <p>
          The grand opening ceremony of the 14th edition of <strong>TCET Model United Nations (TCET-MUN) </strong>began with great enthusiasm, setting a remarkable tone for the event. Spanning three days, the MUN will feature a series of thought-provoking discussions and diplomatic simulations on a variety of important agendas. 
          </p>
          <p>
          The ceremony not only marked the start of this prestigious conference but also highlighted the vision and commitment of <strong>Dr. B.K. Mishra, Principal of TCET.</strong> The event was further honored by the presence of esteemed guests, including <strong>Dr. Amol Dapkekar</strong> and <strong>Jyoti Mam</strong>, our dedicated faculty in charge. Their presence lent an added layer of significance to the event, emphasizing the crucial role of the Model United Nations in promoting global awareness and diplomacy.Their presence lent an added layer of significance to the event, emphasizing the crucial role of the Model United Nations in promoting global awareness and diplomacy. Additionally, the opening ceremony included inspiring speeches, where participants were encouraged to approach the conference with a spirit of collaboration and a commitment to finding innovative solutions to the world's most pressing issues.
          </p>
        </div>
        <div ref={ref} className={`image-gallery ${inView ? 'pop-up' : ''}`}>
          <img src="/images/1.jpeg.jpg" alt="MUN Ceremony 1" />
          <img src="/images/2.jpeg.jpg" alt="MUN Ceremony 2" />
          <img src="/images/3.jpeg.jpg" alt="MUN Ceremony 3" />
          <img src="/images/4.jpeg.jpg" alt="MUN Ceremony 4" />
          <img src="/images/5.jpeg.jpg" alt="MUN Ceremony 5" />
        </div>
      </div>
    </section>
  );
};

export default EVENTS;

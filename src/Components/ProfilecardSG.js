import React from "react";
import "./ProfileCard.css";

const ProfileCardSG = () => {
  return (
    <div className="bigconatiner">
      <div className="profile-card">
        <div className="profile-image">
          <img src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/main/images/SAHIL1.jpg" alt="Sahil Singh" />
          <div className="role-tag">Secretary General</div>
        </div>
        <div className="profile-content">
          <h2>LETTER FROM SECRETARY GENERAL</h2>
          <p>
            Dear Delegates, respected Faculty Advisors, and the Secretariat,
          </p>
          <p>
            I am pleased to announce the commencement of the Fourteen edition of
            the TCET Model United Nations. Having established a remarkable
            legacy over the span of its 13- year history, TCET Model United
            Nations holds the distinction of being one of the earliest and most
            esteemed conferences in India.
          </p>
          <p>
            The transition from an online platform during the Covid era to an
            offline dias has proven to be highly successful, as the conference
            has achieved significant milestones, marking a new chapter in its
            esteemed history. Guiding such a prestigious conference is an
            immense responsibility, yet with the invaluable wisdom passed down
            by previous Secretary Generals and the exceptional dedication of our
            dynamic and diligent Secretariat, I am filled with optimism for the
            enthralling experience this edition promises to deliver. I invite
            you to join us for this monumental edition, where passionate
            debates, world changing aspirations, and productive discussions with
            innovative resolutions await.
          </p>

          <p>
            See you all at yet another marvelous TCET Model United
            Nations conference!
          </p>
          <h3>Sahil Singh</h3>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-image">
          <img src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/main/images/ZIYAN.jpg" alt="Ziyan Khan" />
          <div className="role-tag">Director General</div>
        </div>
        <div className="profile-content">
          <h2>LETTER FROM DIRECTOR GENERAL</h2>
          <p>Dear Delegates, Advisors, and Guests,</p>

          <p>Welcome to the 14th edition of TCET Model United Nations.</p>

          <p>
            This year's theme, “Navigating Global Challenges: Building
            Resilience and Unity in an Uncertain World,” emphasizes the critical
            need for collaborative solutions to pressing global issues, from
            healthcare infrastructure to nuclear proliferation and human rights.
            TCET-MUN is a platform where emerging leaders come together to
            engage in rigorous debate and develop innovative solutions. Your
            participation is crucial in shaping strategies that will address
            these challenges. I encourage you to approach this conference with
            dedication and an open mind, as the work you do here will contribute
            to a more resilient and equitable world.
          </p>
          <p>Looking forward to a successful and impactful conference.</p>

          <h3>Ziyan Khan</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardSG;

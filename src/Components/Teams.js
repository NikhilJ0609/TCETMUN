import React from "react";
import styled from "styled-components";

// Styled components
const Section = styled.section`
  padding: 50px;
  text-align: center;
  background-color: #f4f4f4;
  border-top: solid black 2px;
  width: 100%;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  background-color: #373588;
  margin-right: 50px;
  color: white;
`;

const SubHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 20px;
  margin-right: 50px;
  background-color: #373588;
  color: white;
`;

const FacultyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack on smaller screens */
  }
`;

const TeamRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on mobile */
  }
`;

const CenteredTeamRow = styled.div`
  display: flex;
  justify-content: center; /* Center the first two members */
  gap: 30px; /* Spacing between images */
  margin-bottom: 30px; /* Space below the row */
`;

const MemberCard = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const MemberName = styled.p`
  font-weight: 600;
  margin: 0;
  font-size: 1.2rem;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  margin-top: 5px;
`;

// React Component
const TeamSection = () => {
  const facultyMembers = [
    { name: "Amol Sir", image: "/images/Amol.webp" },
    { name: "Jyoti Mam", image: "/images/Jyoti.webp" },
  ];

  const teamMembers = [
    {
      name: "SAHIL SINGH",
      image: "/images/SAHIL.jpg",
      role: "SECRETARY GENERAL",
    },
    {
      name: "ZIYAN KHAN",
      image: "/Images/ZIYAN.jpg",
      role: "DIRECTOR GENERAL",
    },
    {
      name: "ASTHA TIWARI",
      image: "/Images/AdministrationHead.jpg",
      role: "ADMINISTRATION HEAD",
    },
    {
      name: "HARSH MISHRA",
      image: "/Images/Financehead.jpg",
      role: "FINANCE & HOSPITALITY HEAD",
    },
    {
      name: "AMMAR KHAN",
      image: "/Images/Research.jpg",
      role: "RESEARCH HEAD",
    },
    {
      name: "SEHER SHARIK",
      image: "/Images/Jointresearch.jpg",
      role: "JOINT RESEARCH HEAD",
    },
    {
      name: "DHEER SHRIVASTAVA",
      image: "/Images/Marketing.jpg",
      role: "MARKETING HEAD",
    },
    {
      name: "PRATHAMESH SINGH",
      image: "/Images/Creatives.jpg",
      role: "CREATIVES HEAD",
    },
    {
      name: "KHUSHI GUPTA",
      image: "/Images/contenthead.jpg",
      role: "CONTENT WRITING & MAGAZINE HEAD",
    },
    {
      name: "MAANAV RAJPUT",
      image: "/Images/Delegateaffair.jpg",
      role: "DELEGATE AFFAIRS HEAD",
    },
  ];

  return (
    <Section>
      <section id="teams-section">
        <Heading>OUR FACULTY INCHARGE OF TCET-MUN</Heading>
        <FacultyContainer>
          {facultyMembers.map((faculty, index) => (
            <MemberCard key={index}>
              <MemberImage src={faculty.image} alt={faculty.name} />
              <MemberName>{faculty.name}</MemberName>
            </MemberCard>
          ))}
        </FacultyContainer>

        <SubHeading>OUR AMAZING TEAM</SubHeading>

        {/* Centered row for the first two members */}
        <CenteredTeamRow>
          {teamMembers.slice(0, 2).map((member, index) => (
            <MemberCard key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberCard>
          ))}
        </CenteredTeamRow>

        {/* Row with 4 members */}
        <TeamRow>
          {teamMembers.slice(2, 6).map((member, index) => (
            <MemberCard key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberCard>
          ))}
        </TeamRow>

        {/* Another row with the remaining members */}
        <TeamRow>
          {teamMembers.slice(6).map((member, index) => (
            <MemberCard key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberCard>
          ))}
        </TeamRow>
      </section>
    </Section>
  );
};

export default TeamSection;

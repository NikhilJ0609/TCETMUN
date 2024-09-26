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
    { name: "Amol Sir", image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Amol.webp" },
    { name: "Jyoti Mam", image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Jyoti.webp" },
  ];

  const teamMembers = [
    {
      name: "SAHIL SINGH",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/SAHIL.webp",
      role: "SECRETARY GENERAL",
    },
    {
      name: "ZIYAN KHAN",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/ZIYAN.webp",
      role: "DIRECTOR GENERAL",
    },
    {
      name: "ASTHA TIWARI",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/AdministrationHead.webp",
      role: "ADMINISTRATION HEAD",
    },
    {
      name: "HARSH MISHRA",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Financehead.webp",
      role: "FINANCE & HOSPITALITY HEAD",
    },
    {
      name: "AMMAR KHAN",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Research.webp",
      role: "RESEARCH HEAD",
    },
    {
      name: "SEHER SHARIK",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Jointresearch.webp",
      role: "JOINT RESEARCH HEAD",
    },
    {
      name: "DHEER SHRIVASTAVA",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Marketing.webp",
      role: "MARKETING HEAD",
    },
    {
      name: "PRATHAMESH SINGH",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Creatives.webp",
      role: "CREATIVES HEAD",
    },
    {
      name: "KHUSHI GUPTA",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/contenthead.webp",
      role: "CONTENT WRITING & MAGAZINE HEAD",
    },
    {
      name: "MAANAV RAJPUT",
      image: "https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/Delegateaffair.webp",
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

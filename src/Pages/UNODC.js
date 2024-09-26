import React from "react";
import styled from "styled-components";

// Styled-components for styling
const PageContainer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  font-family: "Baskervville SC", serif;
`;

const HeaderBlock = styled.div`
  background-color: #fdd835; /* Contrasting color for header */
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
`;

const LogoImage = styled.img`
  width: 200px;
  margin: 20px 0;
  border-radius: 10px;
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

// New Section for UNSC agenda and paragraph
const AgendaSection = styled.div`
  background-color: #333; /* Dark gray for agenda section */
  padding: 30px;
  margin: 40px 0;
  border-radius: 10px;
`;

const UNODCPage = () => {
  return (
    <PageContainer>
      {/* Committee Header */}
      <HeaderBlock>
        <h1>UNITED NATIONS OFFICE ON DRUGS AND CRIMES (UNODC)</h1>
      </HeaderBlock>

      {/* Centered Logo */}
      <LogoImage
        src="https://raw.githubusercontent.com/NikhilJ0609/TCETMUN/refs/heads/images/images/UNODC.webp" // Make sure this path is correct
        alt="UNODC Logo"
      />

      {/* Agenda Section */}
      <AgendaSection>
        <h2>AGENDA</h2>
        <Paragraph>
          Deliberating on effective strategies to combat organized crime and
          transnational criminal activities perpetrated by guerrilla groups in
          Latin America. 🔍
        </Paragraph>
      </AgendaSection>
    </PageContainer>
  );
};

export default UNODCPage;

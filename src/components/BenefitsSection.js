import React from "react";
import heroIntro2 from "../assets/images/photos/hero-intro2.jpg";
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const BenefitsSection = () => {
  return (
    <Benefets>
      <Description>
        <h2>High-Quality Learning System</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={heroIntro2} alt="A girl in Laboratory" />
      </Image>
    </Benefets>
  );
};

// Styled Components
const Benefets = styled(About)`
  flex-direction: row-reverse;

  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
    margin: 0rem 0rem 0rem 4rem;
  }

  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0rem 0rem 4rem;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0, 100% 91%, 0% 100%);
    border-left: 4px solid #30bee1;
  }
`;

export default BenefitsSection;

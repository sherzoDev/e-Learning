import React from "react";
import heroIntro2 from "../assets/images/photos/hero-intro2.jpg";

const BenefitsSection = () => {
  return (
    <div className="benefits">
      <div className="description">
        <h2>Hi quality learning system</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </div>
      <img src={heroIntro2} alt="A girl in Laboratory" />
    </div>
  );
};

export default BenefitsSection;

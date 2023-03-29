import React from "react";
import HomeIntro from "../assets/images/photos/hero_intro1.jpg";

const AboutSection = () => {
  return (
    <div className="">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Be educated so that</h2>
          </div>
          <div className="hide">
            <h2>you can change</h2>
          </div>
          <div className="hide">
            <h2>the world.</h2>
          </div>
        </div>
        <p>
          An educated mind can tech many. An educated mind is better than empty
          one.
        </p>
        <button>About us</button>
      </div>
      <div className="image">
        <img src={HomeIntro} alt="downloading . . . " />
      </div>
    </div>
  );
};

export default AboutSection;

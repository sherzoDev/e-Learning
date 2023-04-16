import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import react from "../assets/images/photos/react.jpg";
import soon from "../assets/images/photos/soon.jpg";
import javascript from "../assets/images/photos/javascript.png";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interaktiv React va Redux</h2>
        <div className="line"></div>
        <Link>
          <img src={react} alt="react-redux" />
        </Link>
      </Course>
      <Course>
        <h2>Tez kunda 😀</h2>
        <div className="line"></div>
        <Link>
          <img src={soon} alt="tez kunda" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JavaScript</h2>
        <div className="line"></div>
        <Link>
          <img src={javascript} alt="javascript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
  }
`;

export default Courses;

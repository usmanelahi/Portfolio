import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Usman Elahi </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br /> I am a Computer Science graduate from National University of
            Computer & Emerging Sciences (FAST - NUCES).
            <br />
            I am currently employed as a software developer at Eastman
            Enterprises.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is like trying to catch a unicorn in a rainstorm -
            challenging, occasionally messy, but absolutely worth the
            adventure!"{" "}
          </p>
          <footer className="blockquote-footer">Usman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

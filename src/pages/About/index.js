import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { AboutMe, MySkills, MyResume } from "../../components/AboutMe";
import "./style.css";

function About() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    API.getSkills.then((res) => {
      setSkills(res);
    });
  }, []);

  return (
    <Container style={{ marginTop: 30, minHeight: "100vh" }}>
      <AboutMe />
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="http://placehold.it/700x400" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="http://placehold.it/700x400" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="http://placehold.it/700x400" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        <MySkills skills={skills}>
          <MyResume />
        </MySkills>
      {/* <div className="row">
        <div className="col-lg-6">
          <h2>Technical Skills</h2>
          <p>The Modern Business template by Start Bootstrap includes:</p>
          <ul>
            <li><b>Languages:</b> Java, JavaScript/jQuery, HTML, CSS</li>
            <li><b>CSS Framework:</b> Bootstrap, Materialize</li>
            <li><b>Browser Based Technologies:</b> Responsive Design, Handlebars, Local Storage</li>
            <li><b>Databases:</b> MongoDB, MySQL</li>
            <li><b>Deployment:</b> Heroku, Git</li>
            <li><b>Server-Side Deployment:</b> Express.js, Node.js, User Authentication</li>
            <li><b>Other Skills:</b> Analytical Skills, Problem Solving, Time Management, Technical Mindset, Teamwork</li>
            <li><b><i className="fa fa-heart" style={{ color: "red" }}></i></b> And <u>life-long dedication to learning!</u></li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div id="resume">
            <p id="p-header">Resume</p>
            <div id="resume-holder">
            </div>
          </div>
        </div>
      </div> */}

    </Container>
  );
}

export default About;

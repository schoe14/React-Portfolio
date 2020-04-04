import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";

export function AboutMe() {
    return (
        <Jumbotron>
            <div className="text-center">
                <div>Hello. I'm <b>Seohui Choe</b> and I am a Full Stack Developer based in Richmond, VA.
                <br></br>I enjoy creating <b>clean, technical, user-friendly</b> web applications.</div>
            </div>
            <div className="text-center">
                <div id="hashtag"><i className="fa fa-hashtag"></i> Certified Full Stack Developer</div>
                <div id="hashtag"><i className="fa fa-hashtag"></i> A Lover of Learning</div>
                <div id="hashtag"><i className="fa fa-hashtag"></i> Analytical Mindset</div>
            </div>
        </Jumbotron>
    );
}

export function MySkills({ children, skills }) {
    return (
        <Row style={{ paddingTop: "20px" }}>
            <Col size="lg-6">
                <h2>Technical Skills</h2>
                <p>My application development experiences include:</p>
                <ul>
                    {skills.map(skill => {
                        return <li className="skills"><b>{skill[0]}:</b> {skill[1]}</li>
                    })}
                    <p className="skills"><b><i className="fa fa-heart" style={{ color: "red" }}></i></b> And <u>life-long dedication to learning!</u></p>
                </ul>
            </Col>
            {children}
        </Row>
    );
}

export function MyResume() {
    return (
        <Col size="lg-6">
            <h2>Resume</h2>
            <div className="card">
                <a href="assets/resume/Seohui-Choe-Resume.pdf" target="blank"><img src="assets/images/resume-thumbnail.JPG" className="d-block w-100" alt="Resume" style={{ height: "350px" }} /></a>
                <div className="card-body">
                    <p className="card-text"><i className="fa fa-arrow-up"></i> Click to download!</p>
                </div>
            </div>
        </Col>
    );
}
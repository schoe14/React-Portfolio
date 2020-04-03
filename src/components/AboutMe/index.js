import React, { useState, useEffect } from "react";
// import API from "../../utils/API";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Row from "../../components/Row";
import Col from "../../components/Col";

export function AboutMe() {
    return (
        <Jumbotron>
            <div>Hello. I'm <b>Seohui Choe</b> and I am a Full Stack Developer based in Richmond, VA. I enjoy
                        creating <b>clean, technical, user-friendly</b> web applications.</div>
            <div id="hashtag"><i className="fa fa-hashtag"></i> Certified Full Stack Developer</div>
            <div id="hashtag"><i className="fa fa-hashtag"></i> A Lover of Learning</div>
            <div id="hashtag"><i className="fa fa-hashtag"></i> Analytical Mindset</div>
        </Jumbotron>
    );
}

export function MySkills({ children, skills }) {
    return (
        <Row style={{ paddingTop: "20px" }}>
            <Col size="lg-6">
                <h2>Technical Skills</h2>
                <p>The Modern Business template by Start Bootstrap includes:</p>
                <ul>
                    {skills.map(skill => {
                        return <li><b>{skill[0]}:</b> {skill[1]}</li>
                    })}
                    <li><b><i className="fa fa-heart" style={{ color: "red" }}></i></b> And <u>life-long dedication to learning!</u></li>
                </ul>
            </Col>
            {children}
        </Row>
    );
}

export function MyResume() {
    return (
        <Col size="lg-6">
            <div id="resume">
                <h2 id="p-header">Resume</h2>
                <div id="resume-holder">
                </div>
            </div>
            {/* <img className="img-fluid rounded" src="http://placehold.it/700x450" alt="" /> */}
        </Col>
    );
}
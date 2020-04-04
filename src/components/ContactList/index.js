import React from "react";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";
import "./style.css";

export function ContactList({ children }) {
    return (
        <Container>
            <h1 className="mt-4 mb-3">Contact</h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact</li>
            </ol>
            {children}
        </Container>
    );
}

export function ContactItem({ email, github, linkedIn, photo }) {
    return (
        <Row id="myContact" style={{ marginTop: "30px" }}>
            <Col size="lg-3 mb-3" style={{ textAlign: "center" }}>
                <img className="img-fluid rounded" src={photo ? photo : "http://placehold.it/700x450"} alt="" style={{ height: "250px" }} />
            </Col>
            <Col size="lg-9 mb-9">
                <div className="contact-info">
                    <h5><i className="fa fa-envelope-square"></i>: {email}</h5>
                    <h5><i className="fa fa-github"></i>: <a className="link" href={github} target="blank">Seohui's Github</a></h5>
                    <h5><i className="fa fa-linkedin"></i>: <a className="link" href={linkedIn} target="blank">Seohui's LinkedIn</a></h5>
                </div>

                <div className="my-story">
                    <p className="story-header">More About Me..</p>
                    My name is Seohui Choe, a graduate from Virginia Tech with a degree in Accounting and Information Systems.
                    Although I enjoyed my time utilizing my knowledge and skills as an auditor, I always had a desire to learn technologies.
                    I am enrolled in Coding Boot Camp in University of Richmond and learning new skills everyday.
                    I believe that my huge interest in technology and accounting background will benefit your company.
                    I would love if there were opportunity for me to be considered for Software Developer position and have the chance to discuss how my qualifications meet your company’s needs.
                </div>
            </Col>
        </Row>
    );
}
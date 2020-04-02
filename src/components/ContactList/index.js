import React from "react";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";
// import "./style.css";

export function ContactList({ children }) {
    return (
        <Container>
            <h1 className="mt-4 mb-3">Contact<small>Subheading</small></h1>
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
                <img className="img-fluid rounded" src={photo ? photo : "http://placehold.it/700x450"} style={{ height: "250px" }} />
            </Col>
            <Col size="lg-9 mb-9">
                <p>{email}</p>
                <p>{github}</p>
                <p>{linkedIn}</p>
            </Col>
        </Row>
    );
}
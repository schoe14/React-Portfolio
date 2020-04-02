import React from "react";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";
import "./style.css";

export function PortfolioList({ children }) {
    return (
        <Container>
            <h1 className="mt-4 mb-3">Portfolio
             <small>Subheading</small>
            </h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Portfolio</li>
            </ol>
            {children}
        </Container>
    );
}

export function PortfolioItem({ title, img, link, github, detail }) {
    return (
        <Row id={title ? title.toLowerCase() : ""} style={{ marginTop: "50px" }}>
            <Col size="md-7">
                <img className="img-fluid rounded mb-3 mb-md-0" src={img} alt="" style={{ width: "700px", height: "300px" }} />
            </Col>
            <Col size="md-5" id="content">
                <h3>{title}</h3>
                <p>{detail}</p>
                <a className="btn btn-primary" href={link}>View Project</a>
                <a className="btn btn-primary" href={github}>Github <i className="fa fa-github"></i>
                </a>
            </Col>
        </Row>
    );
}
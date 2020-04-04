import React from "react";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";
import "./style.css";

export function PortfolioList({ children }) {
    return (
        <Container>
            <h1 className="mt-4 mb-3">Portfolio</h1>
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
        <Row id="portfolio-row" style={{ marginTop: "50px" }}>
            <Col size="md-7">
                <img className="img-fluid rounded mb-3 mb-md-0" src={img} alt="" style={{ width: "700px", height: "300px" }} />
            </Col>
            <Col size="md-5" id="content">
                <h3>{title}</h3>
                <p className="detail">{detail}</p>
                <a className="btn btn-primary" href={link} target="blank">Live Link</a>
                <a className="btn btn-primary" href={github} target="blank">Github <i className="fa fa-github"></i>
                </a>
            </Col>
        </Row>
    );
}
import React, { useState, useEffect, } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import { PortfolioList, PortfolioItem } from "../../components/PortfolioItem";
// import "./style.css";

function Portfolio() {
    const [portfolio, setPortfolio] = useState([{}]);

    useEffect(() => {
        API.getPortfolio.then((res) => {
            // console.log(res);
            setPortfolio(res);
        });
    }, []);

    // const handleInputChange = event => {
        // console.log("event.target.value: " + event.target.value)
        // console.log("event.target.id: " + event.target.id)
    // };

    return (
        <Container style={{ marginTop: 30, minHeight: "100vh" }}>
            <PortfolioList>
                {portfolio.map(item => {
                    return (
                        <PortfolioItem
                            key={item.title}
                            title={item.title}
                            img={item.img}
                            link={item.link}
                            github={item.github}
                            detail={item.detail}
                        />
                    );
                })
                }
            </PortfolioList>
        </Container>
    );
}

export default Portfolio;

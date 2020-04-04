import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import { AboutMe, MySkills, MyResume } from "../../components/AboutMe";
import { CarouselList, CarouselItem } from "../../components/CarouselList";
import "./style.css";

function About() {
  const [skills, setSkills] = useState([]);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    API.getSkills.then((res) => {
      setSkills(res);
    });
    API.getCarouselItems.then((res) => {
      setCarousel(res);
    });
  }, []);

  return (
    <Container style={{ marginTop: 30, minHeight: "100vh" }}>
      <AboutMe />
      <CarouselList>
        <CarouselItem carousel={carousel} />
      </CarouselList>
      <Container style={{ marginTop: 30 }}>
        <MySkills skills={skills}>
          <MyResume />
        </MySkills>
      </Container>
    </Container>
  );
}

export default About;

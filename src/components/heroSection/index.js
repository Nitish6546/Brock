import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { ButtonR } from "../ButtonElements";
import "../../App.css";
import AppSlide from "../navbar/AppSlide";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <AppSlide />
      </HeroBg>
      <HeroContent>
        {/* <h1 className="h1-hero">Reaching Goals With Direct Admision Global</h1>
        <p className="hero-text">
          
        </p>
        <HeroBtnWrapper>
          <ButtonR to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonR> */}
        {/* </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

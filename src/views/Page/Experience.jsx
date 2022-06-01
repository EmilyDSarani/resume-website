import React, { Component } from "react";
import { Link } from "react-router-dom";
import ParticlesMagic from "../../components/Particles/Particles";
import {
  buttonContainerStyles,
  buttonStyles,
  containerStyles,
  frostStyles,
} from "../../utils/stylesContainer";
import {
  headerOneStyles,
  headerThreeStyles,
  headerTwoStyles,
} from "../../utils/stylesGeneral";

export default class Experience extends Component {
  render() {
    return (
      <div className={containerStyles}>
        <ParticlesMagic />
        <div className={frostStyles}>
          <div>
            <h1 className={headerOneStyles}>Education</h1>

            <h2 className={headerTwoStyles}> Alchemy Code Lab</h2>
            <h3 className={headerThreeStyles}> August 2021 - March 2022</h3>
            <h4 className={headerThreeStyles}>
              Certificate: FullStack JavaScript
            </h4>
            <h2 className={headerTwoStyles}> Oklahoma Christian University</h2>
            <h3 className={headerThreeStyles}> August 2016 - April 2019</h3>
            <h4 className={headerThreeStyles}>
              Bachelors: Public Communication and Leadership
            </h4>
            <h4 className={headerThreeStyles}> Minor: Management </h4>
            <h1 className={headerOneStyles}>Work</h1>

            <h2 className={headerTwoStyles}>
              Oklahoma State Department of Rehabilitation Services
            </h2>
            <h3 className={headerThreeStyles}> December 2020-June 2021</h3>
            <h4 className={headerThreeStyles}>
              Disability Determination Specialist 1
            </h4>

            <h2 className={headerTwoStyles}>Hertz Car Rental</h2>
            <h3 className={headerThreeStyles}> July 2020-November 2020</h3>
            <h4 className={headerThreeStyles}>
              Title and Registration Processor
            </h4>

            <div className={buttonContainerStyles}>
              <Link to="/">
                <button className={buttonStyles}>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

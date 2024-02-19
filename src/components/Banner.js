import React from 'react';
import Typical from 'react-typical';
import navIcon2 from '../assets/img/nav-icon2.svg';
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";
import "../styles/Banner.css";

class Banner extends React.Component {
  render() {
    return (
      <div id="intro">
        <FractalTree />
        <div className="intro-text">
          <Typical
            steps={['Hi, ', 1000, 'Hi, Betty here.', 500]}
            loop={1}
            wrapper="p"
            className="Typist"
          />
        </div>
        <FadeInSection>
          <div className="intro-subtitle">I am a Science Lover.</div>
          <div className="intro-desc">
            I'm an IT Technical Support from Ottawa, Canada. I'm fascinated by
            large-scale, artificial intelligence, programming, human-computer interaction, and also programming.
          </div>
          <a href="mailto:marilandeguehi@gmail.com" className="intro-contact">
            <img src={navIcon2} alt="Email icon" />
            Say hi!
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Banner;

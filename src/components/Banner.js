import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
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
          {/* Wrap Typed in a div and apply specific styles */}
          <div style={{ fontSize: '6em' }}> {/* Increase text size here */}
            <Typed
              strings={['Hi, ', 'Hi, Betty here.']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
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

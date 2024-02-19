import React from "react";
import "../styles/about.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a full-time <b>IT Consultant</b> at
        <a href="https://www.cgi.com/en"> CGI</a>, working to resolve every Bell employees trouble technologies
         under team Saguenay. At the same time, I am taking a
        full-time <b> Associate Degree</b> in <b>Computer Science Technology </b>at{" "}
        <a href="https://www.collegelacite.ca/">La Cité Collegiale</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science like intelligence artificial, programming, human-computer interaction and also programming. I also creating my own brands of skincare body. And i love physical Activity and Cooking.
      </p>
    );

    const tech_stack = [
      "Html",
      "Python",
      "React.js",
      "Java",
      "Cisco Network",
      "Linux",
      "SQL",
      "Cloud Computing",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

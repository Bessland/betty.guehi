import React from "react";
import "../styles/Project.css";
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {}
    
    const projects = {
      "Linux Project": {
        desc:
          "A little school project creating a python script in bash to allow people to choose basic option in application.",
        techStack: "Python , linux",
      },
      "SQL project": {
        desc:
          "A Small school project to manage employees personnal information and employees professional History",
        techStack: "Javascript, Python, SQL",
      },
      "marilande": {
        desc:
          "Personnal brand Project that requires a high-tech website to make costumers comfortable and make their experiences better ",
        techStack: "Node.js (Express.js), React.js, HTML,Css, JavaScript",
        
      },
      Portfolio: {
        title: "portfolio.js",
        desc:
          "A small JS library that helps with data presentation.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/Bessland/betty.guehi/tree/master",
      }
    
     
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Portfolio Project</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub"; // Mise à jour de l'importation pour MUI v5
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser"; // Mise à jour de l'importation pour MUI v5

class ExternalLinks extends React.Component {
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
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            sx={{
              fontSize: 20, // Utilisation de sx pour le style inline avec MUI v5
              color: "var(--lightest-slate)"
            }}
          />
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              sx={{
                fontSize: 25, // Utilisation de sx pour le style inline avec MUI v5
                color: "var(--lightest-slate)"
              }}
            />
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;

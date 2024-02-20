import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import FadeInSection from './FadeInSection';

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      experienceItems: {
        CGI: {
          jobTitle: "Technical Support @",
          duration: "JUL 2023 - PRESENT",
          desc: [
            "Resolve issues utilizing excellent customer service skills, problem solving skills, technical thinking/reasoning skills, and a high level of individual judgment to ensure outcomes of customer satisfaction.",
            "Receive and respond to user inquiries and requests via telephone, email, case tracking system professionally and with speed, accuracy, and proficiency."
          ],
        },
        Shoppers: {
          jobTitle: "Post-office Clerk @",
          duration: "September 2022 - JUL 2023",
          desc: [
            "Assisting customers within the post office such as receiving mail, selling stamps and envelopes, transfer and receive customer money",
            "Handling customer complaints",
          ],
        },
        "College La Cite": {
          jobTitle: "Computer Science Intern @",
          duration: "MAY 2022 - AUG 2022",
          desc: [
            "Develop mobile apps to facilitate access to school information and services.",
            "Explore new technologies to enhance the educational experience, such as virtual reality, artificial intelligence, etc.",
            "Create customized applications or platforms to address the school's specific needs."
          ],
        },
      },
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value, experienceItems } = this.state;

    return (
      <Box sx={{
        flexGrow: 1,
        backgroundColor: '#0a192f',
        display: 'flex',
        height: 'auto', // Modifier la hauteur en auto pour que le contenu s'adapte
        color: 'text.primary',
      }}>
        <Tabs
          orientation={!isHorizontal ? 'vertical' : 'horizontal'}
          variant="scrollable"
          value={value}
          onChange={this.handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: isHorizontal ? 0 : 1, // Ne pas afficher la bordure sur les écrans horizontaux
            borderBottom: !isHorizontal ? 0 : 1, // Ajouter une bordure en bas sur les écrans horizontaux
            borderColor: 'divider',
            backgroundColor: '#0a192f',
          }}
        >
          {Object.keys(experienceItems).map((key, index) => (
            <Tab label={key} {...a11yProps(index)} key={key} />
          ))}
        </Tabs>
        {Object.keys(experienceItems).map((key, index) => (
          <TabPanel value={value} index={index} key={index}>
            <Typography variant="h6" component="div">
              {experienceItems[key].jobTitle} <span style={{ fontWeight: 'normal' }}>{key}</span>
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ mt: 1 }}>
              {experienceItems[key].duration}
            </Typography>
            <ul className="job-description">
              {experienceItems[key].desc.map((descItem, itemIndex) => (
                <FadeInSection delay={`${itemIndex + 1}00ms`} key={itemIndex}>
                  <li>{descItem}</li>
                </FadeInSection>
              ))}
            </ul>
          </TabPanel>
        ))}
      </Box>
    );
  }
}

export default JobList;

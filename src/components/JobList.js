import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
        <Box p={3}>
          <Typography component="div">{children}</Typography>
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#0a192f', // Appliquez la couleur de fond ici pour le composant entier
    display: 'flex',
    height: 224,
    color: theme.palette.text.primary, // Assurez-vous que le texte reste lisible
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#0a192f', // Conservez cette couleur pour les onglets
  },
  // Ajoutez ici d'autres styles personnalisés si nécessaire
}));



const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
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
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? 'vertical' : 'horizontal'}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
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
          <Typography variant="subtitle1" component="div" style={{ marginTop: '8px' }}>
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
    </div>
  );
};

export default JobList;

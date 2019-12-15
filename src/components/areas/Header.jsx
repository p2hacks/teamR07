import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from '../page/Home';
//import AnimeMatching from '../page/AnimeMatching';
import ChurchDetail from '../page/ChurchDetail';
import MapC from '../page/MapC';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

/*function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}*/
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id='header'>

      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
             <a href={"/home"} >
          <Tab label="HOME" />
          </a>
          <a href={"/church"} >
          <Tab label="教会" />
          </a>
          <a href={"/map_c"} >
          <Tab label="地図" />
          </a>
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
       
      </TabPanel>
      <TabPanel value={value} index={2}>
       
      </TabPanel>
      {/*      <div >
                <a href={"/home"} >HOME</a>
                <a href={"/anime"} >アニメ</a>
                <a href={"/church"} >教会</a>
                <a href={"/mapC"} >地図</a>
            </div>
      */}
    </div >
  )
}

export default Header;

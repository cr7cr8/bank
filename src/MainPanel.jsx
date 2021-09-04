import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    width: 0,
    //With flex-grow: 1, width:0,the item will consume all available space on the line after having factored in flex-basis / width.
//initial width 0px, take the remaing space 10 out of / (flexGrow 10 ->mainPanel  +   flexGrow 0-> from left bar )


    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"

        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
          <Tab label="Item Eight" {...a11yProps(7)} />
          <Tab label="Item Nine" {...a11yProps(8)} />
          <Tab label="Item Ten" {...a11yProps(9)} />
          <Tab label="Item Eleven" {...a11yProps(10)} />
          <Tab label="Item Twelve" {...a11yProps(11)} />
          <Tab label="Item Thirteen" {...a11yProps(12)} />
          <Tab label="Item One" {...a11yProps(13)} />
          <Tab label="Item Two" {...a11yProps(14)} />
          <Tab label="Item Three" {...a11yProps(15)} />
          <Tab label="Item Four" {...a11yProps(16)} />
          <Tab label="Item Five" {...a11yProps(17)} />
          <Tab label="Item Six" {...a11yProps(18)} />
          <Tab label="Item Seven" {...a11yProps(19)} />
          <Tab label="Item Eight" {...a11yProps(20)} />
          <Tab label="Item Nine" {...a11yProps(21)} />
          <Tab label="Item Ten" {...a11yProps(22)} />
          <Tab label="Item Eleven" {...a11yProps(23)} />
          <Tab label="Item Twelve" {...a11yProps(24)} />
          <Tab label="Item Thirteen" {...a11yProps(25)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Nine
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Ten
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Eleven
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item Twelve
      </TabPanel>
      <TabPanel value={value} index={12}>
        Item Thirteen
      </TabPanel>
      <TabPanel value={value} index={13}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={14}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={15}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={16}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={17}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={18}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={19}>
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={20}>
        Item Nine
      </TabPanel>
      <TabPanel value={value} index={21}>
        Item Ten
      </TabPanel>
      <TabPanel value={value} index={22}>
        Item Eleven
      </TabPanel>
      <TabPanel value={value} index={23}>
        Item Twelve
      </TabPanel>
      <TabPanel value={value} index={24}>
        Item Thirteen
      </TabPanel>
    </div>
  );
}
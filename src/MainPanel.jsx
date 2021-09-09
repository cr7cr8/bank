import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';
import { AvatarChip, AvatarLogo } from "./AvatarLogo";

import { Context1 } from "./Context1Provider";

import blue from '@material-ui/core/colors/blue';
import { leftBarCategory, breakpointsAttribute, flatten } from "./config";


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

  const { tabArr, setTabArr, tabValue, setTabValue } = useContext(Context1)

  const theme = useTheme()

  const handleChange = (event, newValue) => {


  };


  const [taskNameArr, setTaskNameArr] = useState(flatten([...Object.keys(leftBarCategory).map((item) => {
    return leftBarCategory[item]
  })]))



  return (
    <div className={classes.root} style={{ backgroundColor: "pink" }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Tabs
          value={tabValue}
          selectionFollowsFocus={true}
          //    onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
        >
          {/* {renderTabArr} */}
          {tabArr.map((label, arrIndex) => {
            //   alert(label)
            return (
              // 
              <Tab
                key={label}
                value={label}
                onClick={function () {
                  setTabValue(label)
                }}
                label={
                  <Grow in={true} key={label}>
                    <div>
                      <AvatarChip size={["0.9rem"]} personName={label} noAvatar={true}
                        style={{ ...label === tabValue && { backgroundColor: blue[400], color: "white" } }}
                        label={
                          <Typography style={{ whiteSpace: "pre-wrap" }} >{label}</Typography>

                        }

                        onDelete={function () {

                          setTabArr(arr => {
                            return arr.filter(item => { return item !== label })
                          })

                          // alert(Math.max(0, arrIndex - 1))
                          tabArr[arrIndex] === tabValue && setTabValue(tabArr[arrIndex === 0 ? 1 : arrIndex - 1])

                        }}
                        hoverContent={<Typography>{label}</Typography>}
                      />
                    </div>

                  </Grow>
                }
                {...a11yProps(label)}
              />
              // 
            )
          })}


        </Tabs>
      </AppBar>

      {taskNameArr.map((taskName, index) => {

        return (
          <TabPanel value={tabValue} index={taskName} key={taskName}>
           <Grow in={true}><Typography variant="h2">{taskName}</Typography></Grow> 
          </TabPanel>


        )

      })}




      
    </div>
  );
}
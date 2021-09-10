import { useState, useRef, useEffect, useContext, useCallback, createContext, useMemo } from 'react';
import { Context1 } from "./Context1Provider"
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';
import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid, AppBar, Toolbar, IconButton, Menu, Zoom } from "@material-ui/core";
import { Image, Brightness4, Brightness5, FormatBold, FormatItalic, FormatUnderlined, InsertEmoticon, PaletteOutlined } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';


import {
  isMobile,
  isFirefox,
  isChrome,
  browserName,
  engineName,
} from "react-device-detect";

import bankLogo from "./bankLogo.png";

import { leftBarCategory, breakpointsAttribute, ConditionalWrapper } from "./config";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


import ListSubheader from '@material-ui/core/ListSubheader';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import blue from '@material-ui/core/colors/blue';
import StarBorder from '@material-ui/icons/StarBorder';

import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,

  },

  listRoot: {
    width: "100%",
    overflowWrap: "anywhere",
    flexGrow: 0,
  //  overflow: "hidden",
    // width: '100%',
  
    backgroundColor: blue[400],//theme.palette.background.paper,
    //color:"white",
    padding: 0,

    "& >.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button": {
      backgroundColor: blue[400],
      color: "white",
    },
    // "& >.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button:hover": {
    //   backgroundColor: blue[100],
    //   color: blue[400],
    // },


    "& .MuiListItemIcon-root": {
      color: "white",
    },

    // "& .MuiButtonBase-root:hover": {
    //   backgroundColor: blue[200],
    // },
    "& .MuiCollapse-container": {
      backgroundColor: blue[50],
      color: blue[400],
      borderBottomStyle: "solid",
      borderBottomColor: blue[400],
      borderBottomWidth: "1px",
    },
    "& .MuiCollapse-container:hover": {
      // backgroundColor: blue[400],
      // color: "white",
      // borderBottomStyle: "solid",
      // borderBottomColor: blue[400],
      // borderBottomWidth: "1px",

    },
    "& .MuiListItem-gutters": {

      ...breakpointsAttribute(["paddingLeft", "0px", "16px", "16px"], ["paddingRight", "0px", "16px", "16px"]),

      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: blue[400],
    },
    "& .MuiListItem-gutters:hover": {
      backgroundColor: blue[100],
      color: blue[400],
    }


  },
  nested: {
    // paddingLeft: theme.spacing(4),
    textAlign: "center"
  },


  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    //transform:"scale(1.5)",
    width: "4rem",
    height: "4rem",
    display: "block",
    borderRadius: 1000,
  },
  appBar: {
    backgroundColor: "#eee",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "space-between",
    borderBottomStyle: "solid",
    borderBottomWidth: "5px",
    borderBottomColor: theme.palette.primary.light,
  },
  logoBox: {
    display: "flex",
    //  justifyContent:"space-around",
    // width:"3000px",
    // backgroundColor:"lightblue",
    "& > div:nth-child(2)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingLeft: "1rem",
      //   backgroundColor: "pink"
    }
  },
  avatarBox: {
    display: "flex"
  },

  avatarRoot: {
    width: "2rem",
    height: "2rem",
  }
}));


export default function LeftBar() {


  const { tabArr, setTabArr, tabValue, setTabValue } = useContext(Context1)
  const classes = useStyles();
  const [categoryNameArr, setCategoryNameArr] = useState(Object.keys(leftBarCategory).map((item) => { return { categoryName: item, open: false, firstTime: true } }))

  return (

    <List classes={{ root: classes.listRoot, }} >

      {categoryNameArr.map(({ categoryName, open, firstTime }, index) => {

        return (
          <React.Fragment key={categoryName}>
            <ListItem
              button
              onClick={function () {
                setCategoryNameArr((categoryNameArr) => {
                  categoryNameArr[index].open = !open
                  return [...categoryNameArr]
                })
              }} >
              <Hidden mdDown>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
              </Hidden>
              <Hidden smDown>
                <ListItemText primary={categoryName} />
              </Hidden>

              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit onExited={function () {
              categoryNameArr[index].firstTime && setCategoryNameArr((categoryNameArr) => {
                categoryNameArr[index].firstTime = false
                return [...categoryNameArr]
              })
            }}>

              {leftBarCategory[categoryName].map((taskName, taskIndex) => {

                return (
                  <ConditionalWrapper
                    key={taskName}
                    condition={firstTime}
                    wrapper={Component => <Zoom in={true} style={{ transitionDelay: `${(taskIndex + 1) * 30}ms` }}>{Component}</Zoom>}
                  >
                    <List component="div" disablePadding >
                      <ListItem button className={classes.nested}
                        onClick={function () {
                          if (tabArr.includes(taskName)) {
                            setTabValue(taskName)
                          }
                          else {
                            setTabArr(arr => { arr.push(taskName); return arr })
                            setTabValue(taskName)
                          }
                        }}
                      >
                        <ListItemText primary={taskName} />
                      </ListItem>
                    </List>
                  </ConditionalWrapper>
                )
              })}
            </Collapse>
          </React.Fragment>
        )
      })

      }
    </List>



  )


}




function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}



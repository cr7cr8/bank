import { EditorState, ContentState, ContentBlock, CharacterMetadata, SelectionState, convertToRaw, convertFromRaw, RichUtils, Modifier, convertFromHTML, AtomicBlockUtils } from 'draft-js';
import Editor from "draft-js-plugins-editor";
import Immutable from 'immutable';
import chainable from 'draft-js-plugins-chainable';
import { stateToHTML } from 'draft-js-export-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2, } from 'react-html-parser';

import { useState, useRef, useEffect, useContext, useCallback, createContext, useMemo } from 'react';
import { Context1 } from "./Context1Provider"
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';
import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid, AppBar, Toolbar, IconButton, Menu } from "@material-ui/core";
import { Image, Brightness4, Brightness5, FormatBold, FormatItalic, FormatUnderlined, InsertEmoticon, PaletteOutlined } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
  isMobile,
  isFirefox,
  isChrome,
  browserName,
  engineName,
} from "react-device-detect";

import bankLogo from "./u5.png";


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




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  listRoot: {
    width: '100%',
    maxWidth: 220,
    backgroundColor: blue[400],//theme.palette.background.paper,
    //color:"white",
    padding:0,

    "& >.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button": {
      backgroundColor:blue[400],
      color: "white",
    },
    "& >.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button:hover":{
      backgroundColor:blue[100],
      color: blue[400],
    },


    "& .MuiListItemIcon-root": {
      color: "white",
    },

    // "& .MuiButtonBase-root:hover": {
    //   backgroundColor: blue[200],
    // },
    "& .MuiCollapse-container":{
      backgroundColor:blue[50],
      color:blue[400],
      borderBottomStyle:"solid",
      borderBottomColor:blue[400],
      borderBottomWidth:"1px",
    },
    "& .MuiCollapse-container:hover":{
      backgroundColor:blue[400],
      color:"white",
      borderBottomStyle:"solid",
      borderBottomColor:blue[400],
      borderBottomWidth:"1px",
    
    },



  },
  nested: {
   // paddingLeft: theme.spacing(4),
   textAlign:"center"
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
  avatarBox:{
    display: "flex"
  },

  avatarRoot:{
    width:"2rem",
    height:"2rem",
  }

 

}));


export default function Bank() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const handleClick5 = () => {
    setOpen5(!open5);
  };

  
  const handleClick6 = () => {
    setOpen6(!open6);
  };




  return (
    <>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.appBar }}>


          <Box classes={{ root: classes.logoBox }}>

            <Avatar
              src={bankLogo}
              className={classes.logo}
              //classes={{ root: classes.logo }}
            />

            <Box>
              <Typography variant="h5" style={{ display: "1em", display: "block" }}>
                宁波银行客户统一视图
              </Typography>
              <Typography variant="h5" style={{ fontSize: "0.5em", display: "block" }}>
                BANK OF NINGBO CUSTOME INFORMATION  SYSTEM
              </Typography>

            </Box>
          </Box>


          <Box classes={{ root: classes.logoBox }}>
            <Avatar classes={{root: classes.avatarRoot}} src={bankLogo}/>
          </Box>
        

        </Toolbar>
      </AppBar>


      <List
        component="nav"
        // aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
        //className={classes.root2}
        classes={{ root: classes.listRoot, }}
      >

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="客户视图" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
              <ListItemText primary="客户信息查询" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
              <ListItemText primary="账户信息查询" />
            </ListItem>
          </List>
        </Collapse>




        <ListItem button onClick={handleClick2}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="任务管理" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="任务发起" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="任务查看" />
            </ListItem>
          </List>
        </Collapse>



        <ListItem button onClick={handleClick3}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="后督检查" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="发起检查任务" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="检查任务查看" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClick4}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="受益人识别" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="任务发起" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="任务查询" />
            </ListItem>
          </List>
        </Collapse>


        <ListItem button onClick={handleClick5}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="配置管理" />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="客户对比字段设置" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="质量校验设置" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="重新识别规则设置" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="白名单设置" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="参数设置" />
            </ListItem>
          </List>
        </Collapse>


        <ListItem button onClick={handleClick6}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="报表查询" />
          {open6 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="数据不一致报表" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="客户质量维护报表" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="尽职调查报表" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="后督检查报表" />
            </ListItem>
          </List>
        </Collapse>





        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Start"
          labelPlacement="start"
        />





        {/* <ListItem button>
          <ListItemIcon        >
            <SendIcon />
          </ListItemIcon  >
          <ListItemText primary="客户视图" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem> */}

      </List>


    </>
  )


}




function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
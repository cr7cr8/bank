import React from "react"
import { Context1 } from "./Context1Provider"
import { styled, useTheme } from '@material-ui/core/styles';

import { withStyles, makeStyles } from '@material-ui/styles'

import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid, AppBar, Toolbar, IconButton, Menu, Chip } from "@material-ui/core";
import { Image, Brightness4, Brightness5, FormatBold, FormatItalic, FormatUnderlined, InsertEmoticon, PaletteOutlined } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
  isMobile,
  isFirefox,
  isChrome,
  browserName,
  engineName,
} from "react-device-detect";



import blue from '@material-ui/core/colors/blue';




import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import multiavatar from '@multiavatar/multiavatar'

import AvatarLogo, { AvatarChip } from "./AvatarLogo";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  listRoot: {
    width: '100%',
    maxWidth: 220,
    backgroundColor: blue[400],//theme.palette.background.paper,
    //color:"white",
    padding: 0,

    "& >.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button": {
      backgroundColor: blue[400],
      color: "white",
    },
    "& >.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button:hover": {
      backgroundColor: blue[100],
      color: blue[400],
    },


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
      backgroundColor: blue[400],
      color: "white",
      borderBottomStyle: "solid",
      borderBottomColor: blue[400],
      borderBottomWidth: "1px",

    },



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
    width: theme.spacing(7),
    height: theme.spacing(7),
    //display: "block",
    //borderRadius: 0,
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





export default function HeadBar() {


  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.appBar }}>

            <AvatarChip size={["2.8rem"]} personName="bank" style={{ backgroundColor: "transparent" }}
              label={
                <>
                  <Typography variant="h5" >
                    宁波银行客户统一视图
                  </Typography>
                  <Typography variant="h5" style={{ fontSize: "0.8rem",color: theme.palette.text.secondary }}>
                    BANK OF NINGBO CUSTOME INFORMATION  SYSTEM
               </Typography>
                </>
              }
              hoverContent={
                <>
                  <Typography variant="h5" >宁波银行客户统一视图</Typography>
                  <Typography variant="h5" style={{ fontSize: "0.8rem" }}>
                    BANK OF NINGBO CUSTOME INFORMATION  SYSTEM
                  </Typography>
                </>
              }
            />
        


          <AvatarChip
            size={["1.8rem"]} personName={"毛大帅"}
            label={
              <>
                <Typography variant="h5" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                  毛大帅
              </Typography>
                <Typography variant="h5" style={{ fontSize: "0.6rem", display: "block", color: theme.palette.text.secondary }}>
                  业务经理
              </Typography>
              </>
            }
            hoverContent={
              <>
                <Typography variant="h5" >毛大帅</Typography>
                <Typography variant="h5" style={{ fontSize: "0.8rem" }}>
                  业务经理
                </Typography>
              </>
            }
          />
         
        </Toolbar>

      </AppBar>

    </>
  )


}



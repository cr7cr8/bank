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

import bankLogo from "./bankLogo.png";

import blue from '@material-ui/core/colors/blue';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2, } from 'react-html-parser';
import parse from 'html-react-parser';



import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import multiavatar from '@multiavatar/multiavatar'

import AvatarLogo, { AvatarChip } from "./AvatarLogo";


const svgCode = multiavatar('Binx Bond')
const breakpoints = createBreakpoints({})


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

  return (

    <AppBar position="static">
      <Toolbar classes={{ root: classes.appBar }}>


        <Box classes={{ root: classes.logoBox }}>

          <AvatarLogo size="2.8rem" personName="bank"/>
         
          {/* <div style={{ height: "400px" }}>dssdd</div> */}

          <Box>
            <Typography variant="h5" style={{  display: "block" }}>
              宁波银行客户统一视图
              </Typography>
            <Typography variant="h5" style={{ fontSize: "0.5em", display: "block" }}>
              BANK OF NINGBO CUSTOME INFORMATION  SYSTEM
              </Typography>
          </Box>
        </Box>

        {/* <Box classes={{ root: classes.logoBox }}>
          <Avatar classes={{ root: classes.avatarRoot }} src={bankLogo} />
        </Box> */}
        {/* <AvatarLogo size={["1rem", "3rem", "5rem", "7rem", "9rem"]} personName={Math.random()} /> */}
        <AvatarChip
          size={["1.8rem"]} personName={"jfdklsfjlk"}
          label="fsd飞毛腿l"
          style={{ backgroundColor: "skyblue" }}
          onClick={function () { }}

        />

      </Toolbar>
      <AvatarChip
        size={["1.8rem"]} personName={"jfdklsfjlk"}
        label="fsd飞毛腿l"
        style={{ backgroundColor: "skyblue" }}
        onClick={function () { }}

      />
    </AppBar>

  )


}


const makingStyleObj = function (theme) {
  return {
    avatarSize: ({ size, ...props }) => {
      return {
        ...breakpointsAttribute(["width", size, size, size, size, size], ["height", size, size, size, size, size]), //avatar size

      }
    }
  }
}
class MyAvatar_ extends React.Component {
  constructor(props) { super(props); };
  render() {
    const { classes } = this.props
    return (<Avatar classes={{ root: classes.avatarSize }} src={"data:image/svg+xml;base64," + btoa(svgCode)} />)
  }
}

const withStylesProps = (makingStylesFn) => {
  return (Component) => {
    return ({ children, ...props }) => {
      const Comp = withStyles(makingStylesFn(props))(Component);
      return <Comp {...props}>{children}</Comp>;
    };
  }
}
export const MyAvatar = withStylesProps(makingStyleObj)(MyAvatar_);






function transformFn(node, index) {
  if (node.name === "svg") {


    const { viewbox, ...rest } = node.attribs;

    return (
      <svg   {...rest} viewBox={viewbox}>
        {node.children.map((child, index) => {
          return convertNodeToElement(child, index, transformFn)
        })}
      </svg>
    )
  }
}


function breakpointsAttribute(...args) {

  let xs = {}
  let sm = {}
  let md = {}
  let lg = {}
  let xl = {}

  args.forEach(item => {
    xs = { ...xs, [item[0]]: item[1] }
    sm = { ...sm, [item[0]]: item[2] || item[1] }
    md = { ...md, [item[0]]: item[3] || item[2] || item[1] }
    lg = { ...lg, [item[0]]: item[4] || item[3] || item[2] || item[1] }
    xl = { ...xl, [item[0]]: item[5] || item[4] || item[3] || item[2] || item[1] }
  })


  return {
    [breakpoints.only('xs')]: { ...xs },
    [breakpoints.only('sm')]: { ...sm },
    [breakpoints.only('md')]: { ...md },
    [breakpoints.only('lg')]: { ...lg },
    [breakpoints.only('xl')]: { ...xl },
  }
}

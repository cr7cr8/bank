

import React, { Component } from "react"
import { withStyles, makeStyles, } from '@material-ui/styles'

import { createMuiTheme, Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Chip, Grid, AppBar, Toolbar, IconButton, Menu } from "@material-ui/core";

import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import multiavatar from '@multiavatar/multiavatar'

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
const breakpoints = createBreakpoints({})
const withStylesProps = (makingStylesFn) => {
  return (Component) => {
    return ({ children, ...props }) => {
      const Comp = withStyles(makingStylesFn(props))(Component);
      return <Comp {...props}>{children}</Comp>;
    };
  }
}

const muiTheme = createMuiTheme({})

////////////////////////////////////////////////////////////////////////////



const makingStyleObj = function (...args) {

  return {
    avatarSize: ({ size = "40px", personName, ...props }) => {


      const size_ = Array.isArray(size) ? size : [size]
      return {

        "&.MuiAvatar-circle": {
          ...breakpointsAttribute(["width", ...size_], ["height", ...size_]), //avatar size
        }
      }

    },
    chipSize: ({ size = "40px", personName, ...props }) => {
      const size_ = Array.isArray(size) ? size : [size]
      return {
        ...breakpointsAttribute(["height", ...size_.map(item => { return `calc( ${item} + ${muiTheme.spacing(1)}px )` })]),

        "& .MuiChip-label":{
          "fontWeight":"bold",
          ...breakpointsAttribute(["fontSize", ...size_]), //avatar size
        }
      }

    },


  }
}






class AvatarLogo_ extends Component {
  //  constructor(props) { super(props); };
  render() {
    const { classes, personName, ...rest } = this.props
    return (<Avatar classes={{ root: classes.avatarSize }} src={"data:image/svg+xml;base64," + btoa(personName && multiavatar(personName))} {...rest} />)
  }
}


const AvatarLogo = withStylesProps(makingStyleObj)(AvatarLogo_);
export default AvatarLogo;


class AvatarChip_ extends Component {
  constructor(props) { super(props); };
  render() {
    const { classes, size, personName, ...rest } = this.props
    return (
      <Chip
        classes={{ root: classes.chipSize }}
        avatar={<AvatarLogo size={size} personName={personName} />}
        label={personName}
        {...rest}
      />

    )
  }
}

export const AvatarChip = withStylesProps(makingStyleObj)(AvatarChip_);











import React, { Component } from "react"
import { withStyles, makeStyles, } from '@material-ui/styles'

import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid, AppBar, Toolbar, IconButton, Menu } from "@material-ui/core";

import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import multiavatar from '@multiavatar/multiavatar'





const breakpoints = createBreakpoints({})

const makingStyleObj = function (theme) {
  return {
    avatarSize: ({ size = ["2.8rem"], personName, ...props }) => {

      if (typeof size === 'string' || size instanceof String) {
        return {
          ...breakpointsAttribute(["width", size], ["height", size]), //avatar size
        }
      }
      else if (Array.isArray(size)) {
        return {
          ...breakpointsAttribute(["width", ...size], ["height", ...size]), //avatar size
        }
      }
      else{
        return {
          ...breakpointsAttribute(["width", "2.8rem"] ["height", "2.8rem"]), //avatar size
        }
      }  

    }
  }
}



class AvatarLogo_ extends Component {
  constructor(props) { super(props); };
  render() {
    const { classes } = this.props
    return (<Avatar classes={{ root: classes.avatarSize }} src={"data:image/svg+xml;base64," + btoa(this.props.personName && multiavatar(this.props.personName))} />)
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
const AvatarLogo = withStylesProps(makingStyleObj)(AvatarLogo_);
export default AvatarLogo


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

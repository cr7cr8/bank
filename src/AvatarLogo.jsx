import React, { Component } from "react"
import bankLogo from "./bankLogo.png";


import { withStyles, makeStyles, } from '@material-ui/styles'

import { createMuiTheme, Avatar, Chip, Popover, Typography } from "@material-ui/core";

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
    
        "& .MuiChip-label": {
          "fontWeight": "bold",
          ...breakpointsAttribute(["fontSize", ...size_]), //avatar label size
        }
      }

    },
    popover: () => {
      return {
        pointerEvents: 'none',
      }
    },
    paper: () => {
      return {
        pointerEvents: "auto",
        padding: muiTheme.spacing(1),

      }
    },


  }
}







class AvatarLogo_ extends Component {

  render() {
    const { classes, personName, ...rest } = this.props
    const src = personName === "bank" ? bankLogo : "data:image/svg+xml;base64," + btoa(personName && multiavatar(personName))

    return <Avatar classes={{ root: classes.avatarSize }} src={src} {...rest} />

  }
}


const AvatarLogo = withStylesProps(makingStyleObj)(AvatarLogo_);
export default AvatarLogo;


class AvatarChip_ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      transOriginH: "left",
      transOriginV: "top",
      anchorPos: { "top": 0, "left": 0 },

    }

    this.anchorRef = React.createRef();

  };

  handlePopoverOpen = (event) => {

    const { left, right, width, top, bottom, height } = this.anchorRef.current.getBoundingClientRect()
    const centerX = left + width / 2;
    const centerY = top + height / 2;


    this.setState(pre => {
      return {
        open: true,
        transOriginH: centerX <= window.innerWidth / 2 ? "left" : "right",
        transOriginV: centerY <= window.innerHeight / 2 ? "top" : "bottom",
        anchorPos: {
          "left": centerX <= window.innerWidth / 2 ? Math.round(left) : Math.round(left + width),
          "top": centerY <= window.innerHeight / 2 ? Math.round(top + height) + 8 : Math.round(top) - 8
        },

      }
    });

   
  };

  handlePopoverClose = () => {
    this.setState(pre => { return { ...pre, open: false } });
  };


  componentDidMount() {


  }

  componentDidUpdate(preProp, preState) {



  }

  render() {
    const { classes, size, personName, ...rest } = this.props


    return (
      <div style={{ backgroundColor: "pink", width: "fit-content", display:"inline-block" }}    >

        <Chip
          classes={{ root: classes.chipSize }}
          avatar={<AvatarLogo size={size} personName={personName} />}
          label={personName}
          {...rest}
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
          // aria-owns={this.state.open ? 'mouse-over-popover' : undefined}
          // aria-haspopup="true"
          //     innerRef={this.state.anchorEl}
          ref={this.anchorRef}
        />

        <Popover

          marginThreshold={0}
          //id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={this.state.open}
          anchorReference="anchorPosition"
          anchorEl={this.anchorRef.current}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          anchorPosition={{ ...this.state.anchorPos, }}
          transformOrigin={{
            horizontal: this.state.transOriginH,
            vertical: this.state.transOriginV,
          }}

          onClose={this.handlePopoverClose}
          disableRestoreFocus
          PaperProps={{ onMouseEnter: this.handlePopoverOpen, onMouseLeave: this.handlePopoverClose, elevation: 2 }}
        >
          <Typography>I use Povcxvcxvxcvvclxkvl;c;klkv;pover.<br />
            I use Povcxvcxvxcvvclxkvl;ckvl;ckvl;cxvkl


          </Typography>
        </Popover>
      </div>

    )
  }
}

export const AvatarChip = withStylesProps(makingStyleObj)(AvatarChip_);









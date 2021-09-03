

import React, { Component } from "react"
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
          ...breakpointsAttribute(["fontSize", ...size_]), //avatar size
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
        padding: muiTheme.spacing(1)
      }
    },


  }
}





//const classes = useStyles();

//const open = Boolean(anchorEl);



class AvatarLogo_ extends Component {



  render() {
    const { classes, personName, ...rest } = this.props
    return (

      <Avatar classes={{ root: classes.avatarSize }} src={"data:image/svg+xml;base64," + btoa(personName && multiavatar(personName))} {...rest} />



    )
  }
}


const AvatarLogo = withStylesProps(makingStyleObj)(AvatarLogo_);
export default AvatarLogo;


class AvatarChip_ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,

    }

    this.anchorRef = React.createRef();
  };

  handlePopoverOpen = (event) => {
    //  alert("in")
    this.setState({ anchorEl: event.currentTarget, open: true });
  };

  handlePopoverClose = () => {
    // alert("out")
    this.setState({ anchorEl: null, open: false });
  };




  render() {
    const { classes, size, personName, ...rest } = this.props


    return (
      <div style={{ backgroundColor: "pink", width: "fit-content" }}





      >


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
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={this.state.open}
          anchorEl={this.anchorRef.current}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          //    onClose={this.handlePopoverClose}
          //    disableRestoreFocus
          PaperProps={{ onMouseEnter: this.handlePopoverOpen, onMouseLeave: this.handlePopoverClose }}
        >
          <Typography>I use Popover.</Typography>
        </Popover>
      </div>

    )
  }
}

export const AvatarChip = withStylesProps(makingStyleObj)(AvatarChip_);









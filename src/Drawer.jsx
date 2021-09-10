import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';


//import LeftBar from "./LeftBar";

const drawerWidth = "10vw";

const useStyles = makeStyles((theme) => ({

  drawer: (open) => {
    return {
      width: open ? drawerWidth: 0,
      transition: "width 300ms",
    //  maxWidth:   "10vw",
   //   minHeight:"100vh"
   //   position: "relative",    
    }
  },
  drawerPaper: (open) => {
    return {
      // width: open ? "250px" : 0,
      // transition: "width 2s",
      // maxWidth: "10vw",
       position: "relative",
       overflow:"hidden",
    }

  },

}));


export default  function ResponsiveDrawer({children,...props}) {
  

  const [open, setOpen] = React.useState(true)
  const classes = useStyles(open);
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  React.useEffect(function () {
    const timeInterval = setInterval(() => {
      setOpen(pre => !pre)
    }, 3000)

    return function () {
      clearInterval(timeInterval)
    }

  }, [])

  
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {children}
    </Drawer>


  )



}


import React, { createContext, useEffect, useState, useReducer, useRef, useMemo, useCallback, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';



// import CssBaseline from '@material-ui/core/CssBaseline';

 import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid, Grow, Zoom } from "@material-ui/core";

// import LeftBar from "./LeftBar";



// import HeadBar, { MyAvatar } from "./HeadBar";
// import MainPanel from "./MainPanel";
// import Drawer from "./Drawer"

//import AvatarLogo, { AvatarChip } from "./AvatarLogo";

import { AvatarChip, AvatarLogo, } from "avatar-chip";

function App() {

  return (
    <>
      <AvatarChip
        size={["4rem", "3rem", "2rem", "1.5rem"]}
        personName={"bob"}
      />


      <AvatarChip
        size={["4rem", "3rem", "2rem", "11.5rem"]}
        personName={"peter"}
        //onClick={function () { alert("hello peter") }}
        avatarProps={{ onClick: function (e) { e.stopPropagation(); alert("hi") } }}
        //src="https://picsum.photos/200/300" 
        label={<></>}
        hoverContent={<>This is peter</>}
      />



      <AvatarChip
        size={["4rem", "3rem", "2rem", "1.5rem"]} personName={"毛fdsdsdsdsdsd帅"}
        style={{ backgroundColor: "skyblue", color: "blue" }}
        onClick={function () { alert("clicked") }}
        avatarProps={{ size: ["1rem", "2rem", "3rem", "4rem", "5rem"], onClick: function (e) { e.stopPropagation(); alert("hi") } }}
        src="https://picsum.photos/200/300"
        label={
          <>
            <Typography variant="h5" style={{}}>
              06355 马小帅
          </Typography>
            <Typography variant="h5" style={{ fontSize: "0.8rem", display: "block", color: "gray" }}>
              银行总行法律合规部
          </Typography>
          </>
        }
        hoverContent={
          <>
            <div style={{ display: "flex", justifyContent: "center" }}><AvatarLogo size={["2.8rem"]} personName={"毛fdsdsdsdsdsd帅"} /></div>
            <Typography variant="h5" style={{ fontSize: "1rem", }}>
              06355 马小帅
          </Typography>
            <Typography variant="h5" style={{ fontSize: "0.8rem", display: "block", color: "gray" }}>
              银行总行法律合规部
          </Typography>
          </>
        }
      />
    </>
  )



}

export default App;

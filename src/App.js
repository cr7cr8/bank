import React, { createContext, useEffect, useState, useReducer, useRef, useMemo, useCallback, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';



import CssBaseline from '@material-ui/core/CssBaseline';

import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid, Grow, Zoom } from "@material-ui/core";

import LeftBar from "./LeftBar";



import HeadBar, { MyAvatar } from "./HeadBar";
import MainPanel from "./MainPanel";

//import AvatarLogo, { AvatarChip } from "./AvatarLogo";

import { AvatarChip, AvatarLogo, } from "avatar-chip";

function App() {


  return (
    <>
      <CssBaseline />




      <HeadBar />

      {/* <MyAvatar size="10rem"/> */}

      {/* <Grid container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0}

      >
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}style={{backgroundColor:"#faf"}}>
          <LeftBar /> 

        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11} xl={11} >
        <MainPanel />
        </Grid>

      </Grid> */}

      <Zoom in={true} style={{ transitionDelay: "200ms" }}>
        <div style={{ display: "flex", width: "100%", backgroundColor: "pink", }}>

          <LeftBar />
          <MainPanel />
        </div>
      </Zoom>
    </>
  )



}

export default App;

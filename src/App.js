import React, { createContext, useEffect, useState, useReducer, useRef, useMemo, useCallback, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';



import CssBaseline from '@material-ui/core/CssBaseline';

import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid } from "@material-ui/core";

import Bank from "./Bank";


function App() {


  return (
    <>
      <CssBaseline />
      <Bank />
    </>
  )



}

export default App;

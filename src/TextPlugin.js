import React, { useState, useRef, useEffect } from 'react';

import Immutable from 'immutable'
import axios from "axios"

import { Typography, Button, ButtonGroup, Container, } from "@material-ui/core";
import { CropOriginal, Image, Brightness4, Brightness5, FormatBold, FormatItalic } from "@material-ui/icons";
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';

import {
  EditorState, ContentBlock,
  CharacterMetadata, SelectionState, convertToRaw,
  convertFromRaw, RichUtils, Modifier, convertFromHTML,
  AtomicBlockUtils
}
  from 'draft-js';

  export default function createTextPlugin() {
    let externalES = null;
    let externalSetEditorState = null;
  
    function linkStrategy(){

    }


    return {

      linkPlugin: {
        onChange(editorState, { setEditorState }) {
          externalES = editorState
          externalSetEditorState = setEditorState
          externalES = taggingText();
          return externalES
        },
  
        decorators: [
          {
            // strategy: textStrategy,
            // component: textComponent
          }
        ],
      }
  
    }

  }
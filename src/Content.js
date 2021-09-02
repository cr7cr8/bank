import { useState, useRef, useEffect, useContext, useCallback, createContext, useMemo } from 'react';
import { Context1 } from "./Context1Provider"


import { EditorState, ContentState, ContentBlock, CharacterMetadata, SelectionState, convertToRaw, convertFromRaw, RichUtils, Modifier, convertFromHTML, AtomicBlockUtils } from 'draft-js';
import Editor from "draft-js-plugins-editor";
import Immutable from 'immutable';
import Masonry from 'react-masonry-css';
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';

import { stateToHTML } from 'draft-js-export-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2, } from 'react-html-parser';
import reactElementToJSXString from 'react-element-to-jsx-string';



import createImagePlugin from './ImagePlugin';



import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid, Chip, Link } from "@material-ui/core";
import { Image, Brightness4, Brightness5, FormatBold, FormatItalic, FormatUnderlined, InsertEmoticon, NavigateBeforeSharp } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useStyles } from './DraftEditor';
import { useStyles as mentionStyles } from './MentionPlugin';



import {
  isMobile,
  isFirefox,
  isChrome,
  browserName,
  engineName,
} from "react-device-detect";


const { ImageBlog } = createImagePlugin()

export default function Content({ style }) {

  const { editorContent, setEditorContent, lgSizeObj, smSizeObj, deviceSize, picArr, setPicArr,
    postArr, setPostArr,
    postPicArr, setPostPicArr, } = useContext(Context1);

  const theme = useTheme()
  const { editorPaperCss, className1, unstyledBlockCss, imageBlockCss, centerBlockCss, rightBlockCss, } = useStyles({})
  const { mentionHeadRoot, mentionBodyRoot, mentionBodyRoot2, mentionHeadAvatar, mentionHeadLabel, mentionHeadLabel2, mentionBodyLabel, } = mentionStyles();


  function toHtml(preHtml, imgArr) {
    //  alert("bbbb")
    const html = ReactHtmlParser(preHtml, {



      transform: function transformFn(node, index) {

        if (reactElementToJSXString(convertNodeToElement(node)) === "<br />") {

          // alert(reactElementToJSXString(convertNodeToElement(node)))

          return <></>
        }

        if (node.name === "imgtag") {

          //   console.log(node.attribs)
          return (<ImgTag key={index} picArr={imgArr} />)
        }
        if (node.name === "emoji") {

          //   console.log(node.attribs.symbol, node.attribs.imgurl)
          return (
            <Typography variant="body2"
              key={index}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
                display: "inline-block",
                textAlign: "right",
                color: "rgba(0,0,0,0)",
                backgroundImage: node.attribs.imgurl,
                transform: isMobile ? "scale(1.2)" : "scale(1.2)",
                marginLeft: theme.typography.fontSize * 0.12,
                marginRight: theme.typography.fontSize * 0.12,
              }}
            >{node.attribs.symbol}</Typography>
          )
        }
        if (node.name === "longmentionoff_head") {
          return (<span key={index}></span>)
        }
        if (node.name === "longmentionoff_body") {

          const arr = [];
          node.children.forEach(element => {
            arr.push(convertNodeToElement(element))
          })
          return (
            <Chip classes={{ root: mentionBodyRoot2, label: mentionBodyLabel }}
              key={index}
              avatar={< Avatar alt={null} src={node.attribs.imgurl.replace("url(", "").replace(")", "")}   //src={friendObj[person]}
              />}
              label={
                <Typography variant="body2">
                  {arr.map((element, index) => {
                    return <span key={index}>{element}</span>
                  })}
                </Typography>
              }
            // label={< Typography variant="body2" >{node.attribs.person}</Typography >}
            />
          )
        }
        if (node.name === "linkoff") {
          //   alert(node.attribs.linkHost)
          //  alert(node.attribs.linkhost)
          const arr = [];
          node.children.forEach((element, index) => {
            arr.push(convertNodeToElement(element))
          })

          return <LinkTag host={node.attribs.linkhost} address={node.attribs.linkaddress} arr={arr} />


          // return <Typography display="inline">
          //   <Link>{node.attribs.linkaddress}</Link>
          // </Typography>


          // return <Chip
          //   label={node.attribs.linkhost}
          //   clickable
          //   //      color="primary"
          //   variant="outlined"
          // />


          // return <Link>
          //   {arr.map((element, index) => {
          //     return <span key={index}>{element}</span>
          //   })}</Link>



          return <span
            target="_blank"
            //  key={index}
            style={{ color: "blue", cursor: "pointer" }}

            onClick={function (e) {
              //    e.preventDefault()
              e.target.innerHTML = `<a target="_blank" style="text-decoration: none;" href=${node.attribs.linkaddress}>${node.attribs.linkaddress.substr(0)}</a>`         ////.substr(1)
              // e.target.innerHTML === node.attribs.linkhost && e.preventDefault()
              // e.target.innerHTML = node.attribs.linkaddress
              // e.target.href = node.attribs.linkaddress.substr(1)

              arr.map((element, index) => {
                return <span key={index}>{element}</span>
              })
            }}
          >
            {
              node.attribs.linkhost.substr(1)
            }
          </span>



          return (
            <span key={index}> <span href={node.attribs.linkaddress}>{node.attribs.linkhost.substr(1)}</span></span>
          )
        }

        if (node.attribs&&node.attribs.colorblock) {
          //  console.log(node.type)
          const arr = [];
          node.children.forEach((element, index) => {
            arr.push(convertNodeToElement(element))
            // console.log(convertNodeToElement(element))
          })

          console.log("=================================")
          return (
            <div

              key={index}
              style={{

                backgroundImage: "url(https://mernchen.herokuapp.com/api/picture/download/60a204e70270cc001728285f)",
                position: "relative",
                display: "flex",
                backgroundColor: "wheat",
                // width:"100%",
                height: 0,
                paddingBottom: "56.25%",
                alignItems: "center",
                justifyContent: "center",

                //     overflow: "auto",


              }}>
              <div style={{
                textAlign: "center",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
              }}>
                {arr.map((element, index) => {
                  //     alert(reactElementToJSXString(element))
                  //   if(reactElementToJSXString(element)==="<br />"){return }
                  console.log(reactElementToJSXString(element))
                  return toHtml(reactElementToJSXString(element).replaceAll("{' '}", ""), imgArr)
                  //  console.log(reactElementToJSXString(element));
                  // return <span key={index}>{element}</span>
                })}
              </div>
            </div>
          )
        }


        // if (node.name === "colorblock"){

        //    const arr = []; 
        //    node.children.forEach((element, index) => {
        //     arr.push(convertNodeToElement(element))
        //     console.log(element)
        //   })

        //   return(
        //     <span>aaa</span>


        //   )

        // }


        // if (node.attribs.colorblock) {
        //   console.log(node.type)
        //   const arr = [];
        //   node.children.forEach((element, index) => {
        //     arr.push(convertNodeToElement(element))
        //   })

        //   return <div>
        //     {arr.map((element, index) => {
        //       return <span key={index}>{element}</span>
        //     })}

        //   </div>
        // }



        // else {
        //   return (
        //    <span key={index}>{convertNodeToElement(node,index,transformFn)}</span> 
        //   )
        // }

      },

      // preprocessNodes:function preprocessNodesFn(nodes){

      //   console.log("xxxxx")
      //   return nodes
      // },

    })

    return html
  }

  const breakpointColumnsObj = {
    [theme.breakpoints.values.xs]: 1,
    [theme.breakpoints.values.sm]: 1,
    [theme.breakpoints.values.md]: 2,
    [theme.breakpoints.values.lg]: 3,
    [theme.breakpoints.values.xl]: 4,

  };

  return (
    <>

      <Container disableGutters={false}   >

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >

          {postArr.map(function (item, index) {

            return (
              <Paper classes={{ root: editorPaperCss }}
                elevation={3}
                style={{ overflow: "hidden", padding: "0px" }} key={index}>
                {toHtml(postArr[index], postPicArr[index])}
              </Paper>
            )

          })}


        </Masonry>
      </Container>
    </>
  )

}


function ImgTag({ picArr, ...props }) {

  //  const { editorContent, setEditorContent, lgSizeObj, smSizeObj, deviceSize, picArr, setPicArr } = useContext(Context1);
  const theme = useTheme()
  const picNum = picArr.length
  const imgArr = picArr


  if (picNum === 1) {
    return (<div style={{

      position: "relative",
      width: "100%",
      height: 0,
      paddingBottom: "56.25%",

      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      backgroundSize: "cover",
      backgroundImage: "url(" + imgArr[0] + ")",

      backgroundColor: theme.palette.divider,   //"skyblue",
      overflow: "hidden",

    }} />
    )
  }
  else if (picNum === 2) {
    return (
      <div style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: "56.25%",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundColor: theme.palette.divider,   //"skyblue",
        overflow: "hidden",
        //    padding:0,

      }}>


        <div style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          //  paddingBottom: "25%",//  "112.5%", 
          backgroundColor: "pink",
          left: "0%",
          top: "0%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[0] + ")",
          transform: "translateX(-1px) translateY(0px)",
          backgroundColor: "wheat",
        }}
          onClick={function () {
            //    setPicArr(pre => [pre[1]])
          }}

        />
        <div style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          //  paddingBottom: "25%",//  "112.5%", 
          backgroundColor: "wheat",
          left: "50%",
          top: "0%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[1] + ")",
          transform: "translateX(1px) translateY(0px)",
          backgroundColor: "wheat",
        }}
          onClick={function () {
            //    setPicArr(pre => [pre[0]])
          }}
        />

      </div>
    )
  }
  else if (picNum === 3) {
    return (
      <div style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: "56.25%",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundColor: theme.palette.divider,   //"skyblue",
        overflow: "hidden",
        //    padding:0,
      }}>


        <div style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          //  paddingBottom: "25%",//  "112.5%", 
          backgroundColor: "pink",
          left: "0%",
          top: "0%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[0] + ")",
          transform: "translateX(-1px) translateY(0px)",
          backgroundColor: "wheat",
        }}
          onClick={function () {
            //    setPicArr(pre => [pre[1], pre[2]])
          }}

        />
        <div style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          backgroundColor: "wheat",
          left: "50%",
          top: "0%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[1] + ")",
          transform: "translateX(1px) translateY(-1px)",


        }} onClick={
          function () {
            //   setPicArr(pre => [pre[0], pre[2]])
          }} />

        <div style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          backgroundColor: "wheat",
          left: "50%",
          top: "50%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[2] + ")",
          transform: "translateX(1px) translateY(1px)",

        }} onClick={
          function () {
            //   setPicArr(pre => [pre[0], pre[1]])
          }} />

      </div>
    )
  }

  else {
    return (
      <div style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: "56.25%",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundColor: theme.palette.divider,   //"skyblue",
        overflow: "hidden",
        //   padding:0,
      }}>


        <div style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          backgroundColor: "wheat",
          top: "0%",
          left: "0%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[0] + ")",
          transform: "translateX(-1px) translateY(-1px)",

        }} onClick={function () {
          //  setPicArr(pre => [pre[1], pre[2], pre[3]])
        }} />

        <div style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          backgroundColor: "wheat",
          top: "0%",
          left: "50%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[1] + ")",
          transform: "translateX(1px) translateY(-1px)",

        }} onClick={function () {
          //   setPicArr(pre => [pre[0], pre[2], pre[3]])
        }} />

        <div style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          backgroundColor: "wheat",
          top: "50%",
          left: "0%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[2] + ")",
          transform: "translateX(-1px) translateY(1px)",
        }}
          onClick={
            function () {
              //      setPicArr(pre => [pre[0], pre[1], pre[3]])
            }}
        />

        <div style={{
          position: "absolute",
          width: "50%",
          height: "50%",
          backgroundColor: "wheat",
          top: "50%",
          left: "50%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
          backgroundImage: "url(" + imgArr[3] + ")",
          transform: "translateX(1px) translateY(1px)",

        }} onClick={
          function () {
            //   setPicArr(pre => [pre[1], pre[2], pre[3]])
          }} />


      </div>





    )



  }







}

function LinkTag({ address, host, arr, ...props }) {

  const [content, setContent] = useState(host.substr(1))
  const theme = useTheme()



  return <Link
    target="_blank"
    //  key={index}
    style={{
      color: theme.palette.primary.main,
      cursor: "pointer"
    }}

    onClick={function (e) {
      // e.preventDefault()
      //e.target.innerHTML = `<a target="_blank" style="text-decoration: none;" href=${address}>${host.substr(0)}</a>`         ////.substr(1)
      // e.target.innerHTML === node.attribs.linkhost && e.preventDefault()
      // e.target.innerHTML = node.attribs.linkaddress
      // e.target.href = node.attribs.linkaddress.substr(1)
      setContent(
        <Link href={address} target="_blank" rel="noopener">
          {arr.map((element, index) => {
            return <span key={index}>{element}</span>
          })}
        </Link>
      )
    }}
  >
    {content}
  </Link>

}
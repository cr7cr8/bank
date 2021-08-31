import { useState, useRef, useEffect, useContext, useCallback, createContext, useMemo } from 'react';
import { Context1 } from "./Context1Provider"


import { EditorState, ContentState, ContentBlock, CharacterMetadata, SelectionState, convertToRaw, convertFromRaw, RichUtils, Modifier, convertFromHTML, AtomicBlockUtils } from 'draft-js';
import Editor from "draft-js-plugins-editor";
import Immutable from 'immutable';

import chainable from 'draft-js-plugins-chainable';

import createImagePlugin from './ImagePlugin';
import createBoldPlugin from './BoldPlugin';
import createEmojiPlugin from './EmojiPlugin';
import createMentionPlugin from './MentionPlugin';
import createLinkPlugin from './LinkPlugin';
import createDeleteBlogPlugin from './DeleteBlogPlugin';
import createBackColorPlugin from './BackColorPlugin';

import { stateToHTML } from 'draft-js-export-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2, } from 'react-html-parser';
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';

import { Typography, Button, ButtonGroup, Container, Paper, Box, Avatar, Grid } from "@material-ui/core";
import { Image, Brightness4, Brightness5, FormatBold, FormatItalic, FormatUnderlined, InsertEmoticon, PaletteOutlined } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
  isMobile,
  isFirefox,
  isChrome,
  browserName,
  engineName,
} from "react-device-detect";
//import createLlinkPlugin from './LinkPlugin';

//import yellow from '@material-ui/core/colors/yellow';



const { boldPlugin, BoldButton, ItalicButton, UnderlineButton, LargeButton, SmallButton, } = createBoldPlugin()
const { emojiPlugin, EmojiButton, EmojiPanel } = createEmojiPlugin()
const { imagePlugin, ImageButton, TopImageButton, ImageBlog, hasImageBlock } = createImagePlugin()
const { mentionPlugin, MentionButton, MentionPanel, } = createMentionPlugin()
const { linkPlugin } = createLinkPlugin()
const { deleteBlogPlugin, DeleteBlogButton, AddTopLineButton, AddBottomLineButton, AlignCenterButton, AlignRightButton, } = createDeleteBlogPlugin()
const { backColorPlugin, AddBackColorButton, BackColorPanel } = createBackColorPlugin()


export const useStyles = makeStyles(theme => {

  return {

    editorPaperCss: ({ isLight, breakpointsAttribute, isEditorFocusOn }) => {
      return {
        // backgroundColor:"pink",
        borderWidth: "1px", borderStyle: "none",// borderRadius: "25px",
        borderColor: isEditorFocusOn ? theme.palette.primary.main : theme.palette.text.secondary,
        //overflow:"hidden",
        //  paddingLeft: theme.spacing(1),
        //  paddingRight: theme.spacing(1),
        // wordBreak: "break-all",

        wordBreak: "break-all",
        whiteSpace: "pre-wrap",
        lineBreak: "anywhere",
        // minHeight: "20vh",
        //theme.typography.fontSize * 10 + "px",

        //whiteSpace: "pre-line",
        //...breakpointsAttribute(["width", "100%", "100%", "75%", "75%", "75%"])
      }
    },

    unstyledBlockCss: () => {
      return {

        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      }
    },
    imageBlockCss: () => {
      return {
        margin: 0,
        padding: 0,
        //   position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: "56.25%",
      }
    },
    centerBlockCss: () => {
      return {
        // display: "flex",
        // justifyContent: "center",
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        textAlign: "center",
      }

    },
    rightBlockCss: () => {
      return {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        textAlign: "end",

      }
    },
    colorBlockCss: () => {
      return {
        position: "relative",
        display: "flex",
        backgroundColor: "wheat",
        // width:"100%",
        height: 0,
        paddingBottom: "56.25%",
        alignItems: "center",
        justifyContent: "center",

        // overflow: "auto",
        backgroundImage: "url(https://mernchen.herokuapp.com/api/picture/download/60a204e70270cc001728285f)",
        // aspectRatio: "16 / 9",

        "& > div": {
          textAlign: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",

        }




      }


    },

    colorBlockCssPre: () => {

      return {
        height: 0,
        paddingBottom: "56.25%",
        backgroundImage: "url(https://mernchen.herokuapp.com/api/picture/download/60a204e70270cc001728285f)",
        textAlign: "center",
      }

    },

    className1: props => {

      return {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // fontSize:200,
        '&:hover': { background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', },
      }
    },



  }
})


const initialState = {
  entityMap: {
    // "0": {
    //     type: "image",
    //     mutability: "IMMUTABLE",
    //     data: {
    //         src:
    //             "https://www.draft-js-plugins.com/images/canada-landscape-small.jpg"
    //     }
    // }
  },
  blocks: [
    {
      key: "1111",
      text: "ewijveoij http://weibo.com/aas vvv @mmm fdsfd",//`  @aaa @的就是dds http://asd.com `,//  \uD83D\uDE47\u200D\u2640\uFE0F   `,   //  \uD83D\uDE33`,
      type: "colorBlock",
      depth: 0,
      inlineStyleRanges: [
        //    {
        //         offset: 4,
        //         length: 10,
        //         style: "HIGHLIGHT"
        //    },
      ],
      entityRanges: [],
      data: {}
    },
    // {
    //   key: "2222",
    //   text: `  @aaa @的就是dds http://asd.com `,//  \uD83D\uDE47\u200D\u2640\uFE0F   `,   //  \uD83D\uDE33`,
    //   type: "imageBlock",
    //   depth: 0,

    //   data: {
    //     imgUrl: "https://source.unsplash.com/random/800x800",//"blob:http://localhost:3000/3d815879-af57-4950-a82c-a6301402fa99",
    //     imgId: "",
    //     imgArr: ["https://source.unsplash.com/random/1300x400", "https://mernchen.herokuapp.com/api/picture/download/5f197ef0452cc60017f9f488", "https://source.unsplash.com/random/800x751", "https://source.unsplash.com/random/100x252"]
    //   }
    // },


  ]
};

export default function DraftEditor() {

  const { isLight, setIsLight, breakpointsAttribute,
    editorContent,
    setEditorContent,
    lgSizeObj, smSizeObj, deviceSize,
    picArr, setPicArr,
    postArr, setPostArr,
    postPicArr, setPostPicArr,

  } = useContext(Context1)
  const theme = useTheme()

  // const [picArr,setPicArr] = useState([])

  const [isBoldOn, setIsBoldOn] = useState(false)
  const [isItalicOn, setIsItalicOn] = useState(false)
  const [isUnderlineOn, setIsUnderlineOn] = useState(false)
  const [isLargeOn, setIsLargeOn] = useState(false)
  const [isSmallOn, setIsSmallOn] = useState(false)


  const [isEmojiPanelOn, setIsEmojiPanelOn] = useState(false)
  const [isMentionPanelOn, setIsMentionPanelOn] = useState(false)
  const [isBackColorPanelOn, setIsBackColorPanelOn] = useState(false)

  const [isCenterOn, setIsCenterOn] = useState(false)
  const [isRightOn, setIsRightOn] = useState(false)


  const [isEditorFocusOn, setIsEditorFocusOn] = useState(false)

  //const [picArr, setPicArr] = useState([])

  const editor = useRef()
  const { editorPaperCss, className1, unstyledBlockCss, imageBlockCss, centerBlockCss, rightBlockCss, colorBlockCss, colorBlockCssPre } = useStyles({ isLight, isEditorFocusOn, breakpointsAttribute })

  //const [editorState, setEditorState] = useState(EditorState.createEmpty())
  //const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText('some')))
  const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(initialState)))

  useEffect(function () {
    setTimeout(() => {
      editor.current.focus()
      EditorState.moveFocusToEnd(editorState)
    }, 0);
  }, [])


  function toPreHtml(editorContent) {


    const preHtml = stateToHTML(
      editorContent.getCurrentContent(),
      {
        defaultBlockTag: "div",

        inlineStyles: {
          LARGE: { style: { fontSize: lgSizeObj[deviceSize] }, },
          SMALL: { style: { fontSize: smSizeObj[deviceSize] }, },
          linkStyle: { style: { fontSize: 0 } }
        },


        blockStyleFn: function (block) {
          const type = block.getType()
          console.log(type)

          if (type === "unstyled") {
            return {
              attributes: {
                //className: unstyledBlockCss,
                style: "padding-left: 8px;padding-right:8px;"
              },
            }
          }
          if (type === "centerBlock") {
            return {
              attributes: {
                className: centerBlockCss,
              },
            }
          }
          if (type === "rightBlock") {
            return {
              attributes: {
                className: rightBlockCss,
              },
            }
          }
          if (type === "imageBlock") {
            console.log("iiiiii")
          }
          if (type === "colorBlock") {

            return {
              attributes: {
                //className: colorBlockCssPre,
                colorblock: "true"
            
              },
              // style:{
              //   textAlign:"center"
              // }
              style: {
                backgroundImage: "url(https://mernchen.herokuapp.com/api/picture/download/60a204e70270cc001728285f)",
                // color: "red",
                // position: "relative",
                //  display: "block",
                //backgroundColor: "wheat",
                // width: "100%",
                // height: 0,
                // paddingBottom: "56.25%",
                //alignItems: "center",
                //  justifyContent: "center",
                paddingTop: "20%",
                paddingBottom: "20%",
                textAlign: "center",
                lineBreak: "unset"
                //  overflow: "auto",
                // aspectRatio: "16 / 9",
              },
            
            }
          }



        },

        blockRenderers: {
          imageBlock: function (block) {
            const text = block.getText()
            const data = block.getData().toObject()
            const type = block.getType()

            //  return `<img src=${data.imgUrl} style=max-width:300px;display:block;margin-left:auto;margin-right:auto;/>`

            //     return `<imgtag id=${data.imgId} style=max-width:100%;display:block;margin-left:auto;margin-right:auto;/>`
            return '<imgtag id="aaaa">' + escape(block.getText()) + '</imgtag>'
            // return `<div>ffd</div>`
            // return '<imgtag />'
          },
          // colorBlock: function (block) {
          //   return `<colorBlock>` + (block.getText()) + `</colorBlock>`
          // },
        },

        entityStyleFn: function (entity) {
          const { type, data, mutablity } = entity.toObject()
          if (type === "shortMentionOff") {
            return {
              element: "shortMentionoff",
            }
          }
          if (type === "longMentionOff_HEAD") {

            return {

              element: "longmentionoff_head",
              attributes: {
                imgurl: data.imgurl,
                person: data.person,
              },
              style: {}
            }
          }
          if (type === "longMentionOff_BODY") {

            return {

              element: "longmentionoff_body",
              attributes: {
                imgurl: data.imgurl,
                person: data.person,
              },

            }

          }
          if (type === "EMOJI") {
            console.log(data.url)

            return {
              element: "emoji",
              attributes: {
                imgurl: data.url,
                symbol: data.symbol
              }
            }
          }
          // if (type === "linkOn") {
          //   const {linkType,linkAddress,linkHost} = data
          // }
          if (type === "linkOff") {
            // alert("xxx")
            const { linkType, linkAddress, linkHost } = data
            return {
              element: "linkoff",
              attributes: {
                ...data
              }
            }
          }

        },

      }
    )
    return preHtml
  }


  return (

    <Container disableGutters={false}>

      {/* <Avatar />lorem jkdlks */}
      {/* <Avatar src={"https://i.pravatar.cc/300"} /> */}
      {/* <Typography gutterBottom variant="body2" color="textSecondary" noWrap align="right">lorem jdlks djlsfjlkj lkjfljeoiw lkj fdsoij dfslk  jlkfdj jkdjf  fjdkj  kjdlsjd  jeiwohj hdflshjl ljoisdo</Typography> */}


      <Box style={{
        marginBottom: "5px",

        display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap",

        gap: theme.spacing(1),
        width: "100%",
      }}>
        <Paper
          //    elevation
          style={{

            ...(isMobile && !isFirefox) && { marginRight: theme.spacing(1) },
            display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap",
            gap: theme.spacing(1),
            width: "fit-content",
          }}>
          <ButtonGroup variant="text" style={{}}>

            <BoldButton editor={editor} isBoldOn={isBoldOn} setIsBoldOn={setIsBoldOn} />

            <ItalicButton editor={editor} isItalicOn={isItalicOn} setIsItalicOn={setIsItalicOn} />

            <UnderlineButton editor={editor} isUnderlineOn={isUnderlineOn} setIsUnderlineOn={setIsUnderlineOn} />

            <LargeButton editor={editor} isLargeOn={isLargeOn} setIsLargeOn={setIsLargeOn} />
            <SmallButton editor={editor} isSmallOn={isSmallOn} setIsSmallOn={setIsSmallOn} />

            {/* <CenterButton editor={editor} isCenterOn={isCenterOn} setIsCenterOn={setIsCenterOn} /> */}

          </ButtonGroup>
        </Paper>
        <Paper
          style={{

            display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap",
            gap: theme.spacing(1),
            width: "fit-content",
          }}>
          <ButtonGroup variant="text" style={{}}>

            {!isMobile && <EmojiButton color="primary" fontSize="small" isEmojiPanelOn={isEmojiPanelOn} setIsEmojiPanelOn={setIsEmojiPanelOn} />}

            <MentionButton color="primary" fontSize="small" isMentionPanelOn={isMentionPanelOn} setIsMentionPanelOn={setIsMentionPanelOn} />

            <ImageButton color="primary" fontSize="small" picArr={picArr} setPicArr={setPicArr} editor={editor} />
            {/* <TopImageButton color="primary" fontSize="small"  editor={editor} />  */}
          </ButtonGroup>
        </Paper>

        <Paper
          style={{

            display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap",
            gap: theme.spacing(1),
            width: "fit-content",
          }}>
          <ButtonGroup variant="text" style={{}}>
            <AddTopLineButton editor={editor} />
            <DeleteBlogButton editor={editor} />
            <AddBottomLineButton editor={editor} />
            <AlignCenterButton editor={editor} isCenterOn={isCenterOn} setIsCenterOn={setIsCenterOn} />
            <AlignRightButton editor={editor} isRightOn={isRightOn} setIsRightOn={setIsRightOn} />
            <AddBackColorButton editor={editor} color="primary" fontSize="small" isBackColorPanelOn={isBackColorPanelOn} setIsBackColorPanelOn={setIsBackColorPanelOn} />


            {/* <Button
              onClick={function () {
                // setIsLight(pre => !pre)    // editor.current.focus()
              }}
              style={{ color: theme.palette.type === "dark" ? theme.palette.text.secondary : theme.palette.primary.main }}
            >
              <PaletteOutlined />

            </Button> */}

            <Button

              onClick={function () {
                setIsLight(pre => !pre)
                editor.current.focus()
              }}
              style={{
                color: theme.palette.type === "dark"

                  ? theme.palette.text.secondary
                  : theme.palette.primary.main

              }}
            >
              {isLight
                ? <Brightness5 />
                : <Brightness4 />
              }
            </Button>
          </ButtonGroup>
        </Paper>

      </Box>


      <Paper

        elevation={isEditorFocusOn ? 5 : 1}
        //  className={editorPaperClass}
        classes={{ root: editorPaperCss }}
        style={{
          // backgroundColor: "pink"
          // backgroundImage
          // minHeight: "20vh",
          // backgroundImage:"url(https://source.unsplash.com/random/800x800)",
          // opacity:0.3
        }}
        onClick={function () {

          let editorState_ = EditorState.moveSelectionToEnd(editorState);

          setEditorState(EditorState.forceSelection(editorState_, editorState.getSelection()));
          setIsEditorFocusOn(true)
        }}
      >

        <Editor
          ref={function (element) { editor.current = element; }}
          editorState={editorState}




          onChange={function (newState, { ...props }) {


            const { BOLD, ITALIC, UNDERLINE, LARGE, SMALL } = newState.getCurrentInlineStyle().toObject()

            const selection = newState.getSelection()
            const contentState = newState.getCurrentContent()
            const currentKey = selection.getFocusKey()
            const currentBlock = contentState.getBlockForKey(currentKey)
            const currentType = currentBlock.getType()

            setIsCenterOn(currentType === "centerBlock")
            setIsRightOn(currentType === "rightBlock")
            setIsBackColorPanelOn(currentType === "colorBlock")

            setIsEditorFocusOn(selection.hasFocus)

            setIsBoldOn(Boolean(BOLD))
            setIsItalicOn(Boolean(ITALIC))
            setIsUnderlineOn(Boolean(UNDERLINE))
            setIsLargeOn(Boolean(LARGE))
            setIsSmallOn(Boolean(SMALL))

            setEditorContent(newState)
            setEditorState(newState)

          }}

          plugins={//chainable(
            [
              //    focusPlugin,
              boldPlugin,
              imagePlugin,
              emojiPlugin,
              mentionPlugin,
              linkPlugin,
              deleteBlogPlugin,
              backColorPlugin,
            ]
            // )
          }

          // handleReturn={function (e, newState, { setEditorState }) {

          //   setEditorState(RichUtils.insertSoftNewline(newState))
          //   return "handled"
          // }}

          // placeholder="hihihi"
          preserveSelectionOnBlur={true}

          customStyleMap={
            Immutable.Map({
              // stylename1_: {
              //   color: "rgba(200,0,0,1)",
              //   borderRadius: "1000px",
              //   display: "inline-block",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "contain",
              // },
              // figure: {
              //   margin: 0,
              // }
            })
          }

          customStyleFn={function (style, block) {

            const styleNames = style.toObject();

            if (styleNames.LARGE && styleNames.SMALL) {

            }
            else if (Boolean(styleNames.LARGE)) {
              return {
                //color: "red",  // display:"flex",   // justifyContent:"center",
                fontSize: lgSizeObj[deviceSize],
              }
            }
            else if (Boolean(styleNames.SMALL)) {
              return {
                //color: "blue", 
                fontSize: smSizeObj[deviceSize]
              }
            }
            else if (Boolean(styleNames.CENTER)) {

              return {
                display: "flex",
                justifyContent: "center",
              }
            }
            else {

            }
          }}

          blockRenderMap={
            Immutable.Map({
              // 'unstyled': { 
              //   element: 'h3',
              //   wrapper: <Typography variant='body2'/>,
              //  }
            })
          }

          blockStyleFn={function (block) {
            const type = block.getType()
            const text = block.getText()
            if (type === "unstyled") {
              return unstyledBlockCss
            }
            if (type === "colorBlock") {

              return colorBlockCss
            }
            if ((type === "atomic") && (text === "imageBlockText")) {
              return imageBlockCss
            }
            if (type === "centerBlock") {
              return centerBlockCss
            }
            if (type === "rightBlock") {
              return rightBlockCss
            }
          }}

          blockRendererFn0={function (block) {

            const text = block.getText()
            const data = block.getData().toObject()
            const type = block.getType()

            if (type === "imageBlock") {


              return {
                component: function AAA(props) { return <ImageBlog {...props} picArr={picArr} setPicArr={setPicArr} /> },
                // component: function (props) {

                //   const { block, contentState } = props;
                //   return (
                //     <img src={data.imgUrl}
                //       style={{
                //         maxWidth: "100%",
                //         display: "block",
                //         marginLeft: "auto",
                //         marginRight: "auto"
                //       }}
                //     />
                //   )
                // },
                editable: false
              }
            }

            else {
              return null
            }

          }}
          blockRendererFn={function (block) {

            const text = block.getText()
            const data = block.getData().toObject()
            const type = block.getType()
            //   const entityId = editorState.getCurrentContent().getEntityAt(0);


            if (((type === "atomic") && (text === "imageBlockText")) || (type === "imageBlock")) {
              //   console.log(JSON.stringify(data))


              return {
                component: function AAA(props) { return <ImageBlog {...props} picArr={picArr} setPicArr={setPicArr} editor={editor} /> },

                editable: false
              }
            }

            else {
              return null
            }

          }}
          handleKeyCommand={function (command, editorState, evenTimeStamp, { getEditorState }) {

            if (command === "bold") {
              setIsBoldOn(pre => !pre)

              setEditorState(RichUtils.handleKeyCommand(editorState, command))
            }
            else if (command === "italic") {
              setIsItalicOn(pre => !pre)

              setEditorState(RichUtils.handleKeyCommand(editorState, command))
            }
            else if (command === "underline") {
              setIsUnderlineOn(pre => !pre)

              setEditorState(RichUtils.handleKeyCommand(editorState, command))
            }
          }}
        />

      </Paper>

      <Button variant="contained" color="primary"

        style={{ display: "block", width: "100%", marginTop: theme.spacing(1) }}
        onClick={function (e) {
          editor.current.focus()
          setPostArr(pre => { return [...pre, toPreHtml(editorContent)] })
          setPostPicArr(pre => { return [...pre, picArr] })
        }}
      >Post</Button>

      <BackColorPanel isBackColorPanelOn={isBackColorPanelOn} />

      {!isMobile && <EmojiPanel isEmojiPanelOn={isEmojiPanelOn} />}
      <MentionPanel isMentionPanelOn={isMentionPanelOn} />

      {/* <div style={{ whiteSpace: "pre-wrap", display: "flex", fontSize: 15 }}>
        <div>{JSON.stringify(editorState.getCurrentContent(), null, 2)}</div>
        <hr />
        <div>{JSON.stringify(convertToRaw(editorState.getCurrentContent()), null, 2)}</div>
      </div> */}

      {/* {toPreHtml(editorContent)} */}
    </Container>
  )

}


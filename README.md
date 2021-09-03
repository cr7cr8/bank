
ReactHtmlParser(svgHtmlString, { transform: transformFn })

<Avatar classes={{ root: classes.avatarRoot }} src={"data:image/svg+xml;base64,"+btoa(svgCode)} />

function transformFn(node, index) {
  if (node.name === "svg") {


    const { viewbox, ...rest } = node.attribs;

    return (
      <svg   {...rest} viewBox={viewbox}>
        {node.children.map((child, index) => {
          return convertNodeToElement(child, index, transformFn)
        })}
      </svg>
    )
  }
}



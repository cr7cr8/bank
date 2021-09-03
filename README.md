
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
////////////////////

    class MyAvatar_ extends React.Component {
      constructor(props) {
      super(props);
  
      };

      render() {
        const { classes } = this.props
        return (
          <Avatar classes={{ root: classes.avatarRoot }} src={"data:image/svg+xml;base64,"+btoa(svgCode)} />
        )
      }
    } 

    const withStylesProps = (makingStylesFn) => {
      return (Component) => {
        return ({ children, ...props }) => {
          const Comp = withStyles(makingStylesFn(props))(Component);
          return <Comp {...props}>{children}</Comp>;
        };
      }
    }



    export const MyAvatar = withStylesProps(makingStyleObj)(MyAvatar_);




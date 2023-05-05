import React from "react";

const getTag = (elementType) => {
  switch (elementType) {
    case "p":
      return "p";
    case "span":
      return "span";
    case "div":
      return "div";
    default:
      return "span";
  }
};

const getStyle = (props) => {
  const style = new Set();
  props.float && style.add({ float: props.float });
  props.mt && style.add({ marginTop: props.mt });
  props.color && style.add({ color: props.color });
  props.mx && style.add({ marginInline: props.mx });
  props.mb && style.add({ marginBottom: props.mb });
  props.align && style.add({ textAlign: props.align });
  props.fontSize && style.add({ fontSize: props.fontSize });
  props.fontWeight && style.add({ fontWeight: props.fontWeight });
  const initStyle = {
    marginBlock: "0 .5rem",
    lineHeight: "1.5",
    display:"inline-block",
    width: props.width ? props.width : "100%",
  }
  return Object.assign(initStyle, ...style);
};

const Text = ({ elementType = "span", children, ...rest }) => {
  const Tag = React.useMemo(() => getTag(elementType), [elementType]);
  const style = React.useMemo(() => getStyle({ ...rest }), [rest]);
  return <Tag style={style}>{children}</Tag>;
};

export default Text;

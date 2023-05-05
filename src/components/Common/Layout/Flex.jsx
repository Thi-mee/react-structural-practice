import React from "react";

const Flex = ({ children , ...rest}) => {
  return <div style={getFlexStyle(rest)}>{children}</div>;
};

const getFlexStyle = (props) => {
  const style = new Map();
  style.set("display", "flex");
  props.flexFlow && style.set("flexFlow", props.flexFlow);
  props.direction && style.set("flexDirection", props.direction);
  props.flexWrap && style.set("flexWrap", props.flexWrap);
  props.justifyContent && style.set("justifyContent", props.justifyContent);
  props.alignItems && style.set("alignItems", props.alignItems);
  props.alignContent && style.set("alignContent", props.alignContent);
  props.gap && style.set("gap", props.gap);
  props.rowGap && style.set("rowGap", props.rowGap);
  props.columnGap && style.set("columnGap", props.columnGap);

  props.width && style.set("width", props.width);
  props.height && style.set("height", props.height);
  props.padding && style.set("padding", props.padding);

  console.log(Object.fromEntries(style));
  return Object.fromEntries(style);
};

export default Flex;

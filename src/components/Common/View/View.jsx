import React from "react";

/**
 * A View component that renders a div by default
 * @param {{
 * elementType: "div"|"span"|"header"|"footer"|"section"|"aside"|"nav"|"article"
 * children: React.ReactNode
 * width: string
 * height: string
 * color: string
 * backgroundColor: string
 * }} param0
 * @returns
 */
const View = ({ elementType = "div", backgroundColor, children, ...rest }) => {
  const Tag = React.useMemo(() => elementType, [elementType]);
  return (
    <Tag {...rest} style={getStyles({backgroundColor, ...rest})}>
      {children}
    </Tag>
  );
};

const getStyles = ({ width, height, color, backgroundColor, padding }) => ({
  backgroundColor: backgroundColor ? backgroundColor : "transparent",
  color: color ? color : "inherit",
  width: width ? width : "auto",
  height: height ? height : "auto",
  padding: padding ? padding : "0",
});

export default React.memo(View);

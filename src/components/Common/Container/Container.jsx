import React from 'react'

const Container = ({ elementType = "div", children, ...rest }) => {
  const Tag = React.useMemo(() => elementType, [elementType]);
  return <Tag style={getContainerStyle(rest)}>{children}</Tag>;
};

const getContainerStyle = (props) => {
  const themeStyle = getThemeStyle(props.theme);
  const heightStyle = getContainerHeight(props.height);
  if (props.centerContent) {
    return {
      ...themeStyle,
      ...heightStyle,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
  }
  return {
    ...themeStyle,
    ...heightStyle,
  };
};

const getContainerHeight = (height) => {
  return {
    height: height,
  };
};

const getThemeStyle = (colorTheme) => {
  return {
    backgroundColor: colorTheme === "dark" ? "#223" : "#fff",
    color: colorTheme === "dark" ? "#fff" : "#333",
  };
};

export default Container
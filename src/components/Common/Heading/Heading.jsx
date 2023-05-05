import React from 'react'



  const getTag = (level) => {
    switch (level) {
      case 1:
        return "h1";
      case 2:
        return "h2";
      case 3:
        return "h3";
      case 4:
        return "h4";
      case 5:
        return "h5";
      case 6:
        return "h6";
      default:
        return "h1";
    }
  };

const Heading = ({level, children, ...rest}) => {

  const Tag = React.useMemo(() => getTag(level), [level]);


  return (
    <Tag style={getStyle(rest)}>{children}</Tag>
  )
}


const getStyle = (props) => ({
  color: "inherit",
  margin: "0 0 1rem 0",
  padding: "0",
  ...props,
});

export default Heading
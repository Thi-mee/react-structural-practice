import React from "react";
import Button from "./Button";

const LogoutButton = ({
  onClick = () =>
    console.log(
      "Logout button clicked. Pass an onClick prop to handle this event."
    ),
  size,
  backgroundColor = "#c66",
  color = "white",
}) => {
  const style = React.useMemo(
    () => ({
      backgroundColor: backgroundColor,
      color: color,
    }),
    [backgroundColor, color]
  );
  return <Button text="Logout" onClick={onClick} style={style} size={size} />;
};

export default LogoutButton;

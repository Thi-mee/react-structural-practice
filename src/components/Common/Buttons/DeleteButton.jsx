import React from "react";
import Button from "./Button";

/**
 *
 * @param {{
 * size: "sm"|"lg",
 * onClick: () => void
 * }} param0
 * @returns
 */
const DeleteButton = ({
  onClick = () =>
    console.log(
      "Delete button clicked. Pass an onClick prop to handle this event."
    ),
  size,
}) => {
  const style = React.useMemo(
    () => ({
      backgroundColor: "#A44",
      color: "white",
    }),
    []
  );

  return <Button text="Delete" onClick={onClick} style={style} size={size} />;
};

export default React.memo(DeleteButton);

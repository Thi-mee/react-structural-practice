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
const EditButton = ({
  onClick = () =>
    console.log(
      "Edit button clicked. Pass an onClick prop to handle this event."
    ),
  size,
}) => {
  const style = React.useMemo(
    () => ({
      backgroundColor: "#77a",
      color: "white",
    }),
    []
  );

  return <Button text="Edit" onClick={onClick} style={style} size={size} />;
};

export default React.memo(EditButton);

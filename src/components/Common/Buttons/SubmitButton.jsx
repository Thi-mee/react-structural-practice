import React from "react";
import Button from "./Button";

const SubmitButton = ({
  onSubmit = () =>
    console.log(
      "Submit button clicked. Pass an onSubmit prop to handle this event."
    ),
  size,
  text,
  fullwidth,
}) => {
  const style = React.useMemo(() => {
    const hn = {
      backgroundColor: "#338",
      color: "white",
    };
    if (fullwidth) {
      return {
        ...hn,
        width: "100%",
      };
    }
    return hn;
  }, [fullwidth]);
  return (
    <Button text={text} onClick={onSubmit} style={style} size={size}>
      SubmitButton
    </Button>
  );
};

export default React.memo(SubmitButton);

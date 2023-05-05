import React from "react";
import CheckBox from "./CheckBox";
import TextField from "./TextField";

const Form = ({ children, initialState, ...rest }) => {
  const [formState, setFormState] = React.useState(initialState);

  const onValueChange = (event) => {
    if (event.target.type === "checkbox") {
      return setFormState({
        ...formState,
        [event.target.name]: event.target.checked,
      });
    }
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Should Validate the form here

    rest.onSubmit(formState);
  };

  return (
    <form style={getFormStyle(rest)}>
      {React.Children.map(children, (child) => {
        if (child.type.type) {
          return React.cloneElement(child, {
            onSubmit: onSubmit,
          });
        }
        if (child.type === CheckBox) {
          return React.cloneElement(child, {
            onValueChange: onValueChange,
            checked: formState[child.props.name],
          });
        }
        return React.cloneElement(child, {
          value: formState[child.props.name],
          onValueChange: onValueChange,
        });
      })}
    </form>
  );
};

const getFormStyle = (props) => {
  const style = new Set();
  style.add({
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 1rem rgba(0,0,0,0.5)",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "0.5rem",
  });
  if (props.size) {
    style.add(getFormSize(props.size));
  }
  if (props.backgroundColor) {
    style.add({ backgroundColor: props.backgroundColor });
  }
  return Object.assign({}, ...style);
};

const getFormSize = (size) => {
  switch (size) {
    case "sm":
      return {
        width: "400px",
      };
    case "md":
      return {
        width: "600px",
      };
    case "lg":
      return {
        width: "800px",
      };
    default:
      return {
        width: "400px",
      };
  }
};




export { Form, TextField, CheckBox };

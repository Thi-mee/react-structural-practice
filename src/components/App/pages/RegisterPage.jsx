import React from "react";
import Container from "../../Common/Container/Container";
import { CheckBox, Form, TextField } from "../../Common/Form/Form";
import { Link } from "react-router-dom";
import Text from "../../Common/Text/Text";
import Heading from "../../Common/Heading/Heading";
import SubmitButton from "../../Common/Buttons/SubmitButton";
import { useAuthDispatchContext } from "../providers/AuthProvider";

function Copyright(props) {
  return (
    <Text color="#99f" align="center" {...props} mt="1em">
      {`Copyright © `}
      <Link color="inherit" href="https://theumbrelladev.me/">
        Timi Adenuga
      </Link>{" "}
      {new Date().getFullYear()} {`.`}
    </Text>
  );
}

const RegisterPage = () => {
  const dispatch = useAuthDispatchContext();

  React.useEffect(() => {
    document.title = "Register - CTAR";
  }, []);

  const handleSubmit = (submittedData) => {
    dispatch({
      type: "register",
      payload: submittedData,
    });
  };

  return (
    <Container
      elementType="main"
      maxWidth="xs"
      theme="dark"
      height="100vh"
      centerContent>
      <Heading level={1}>Sign up</Heading>
      <Form
        onSubmit={handleSubmit}
        size="sm"
        backgroundColor="#111"
        initialState={{ email: "", password: "", shouldRemember: false , firstName: "", lastName: ""}}>
        <TextField type="text" name="firstName" label="First Name"  width="half-width" />
        <TextField type="text" name="lastName" label="Last Name" width="half-width" />
        <TextField type="email" name="email" label="Email" />
        <TextField type="password" name="password" label="Password" />
        <CheckBox label="Remember me" name="shouldRemember" width="48.8%" />
        <Text color="#99f" align="right" width="48.8%">
          <Link to="/forgot-password">Forgot password?</Link>
        </Text>
        <SubmitButton text="Sign In" fullwidth />
        <Text color="#ccc" align="center" mt="1em">
          Don't have an account?{" "}
          <Link to="/signup" color="#99f">
            Sign Up
          </Link>
        </Text>
      </Form>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default RegisterPage;

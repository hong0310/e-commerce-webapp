import React from "react";
import styled from "styled-components";
import { mobile } from "../response";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { style } from "@mui/system";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f1de;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #81b29a;
  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0px;
  padding: 6px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 6px;
  cursor: pointer;
  background-color: #f4f1de;
  margin: 10px 0px 20px 0px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.div`
  margin: 5px 0px;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, (username, password));
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Oops! Something went wrong...</Error>}
          <Link>FORGET PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

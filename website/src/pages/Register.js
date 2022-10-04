import React from "react";
import styled from "styled-components";
import { mobile } from "../response";

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
  width: 30%;
  background-color: #81b29a;
  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 6px;
`;

const Agreement = styled.span`
  margin: 20px 0px;
  font-size: 11px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 6px;
  cursor: pointer;
  background-color: #f4f1de;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

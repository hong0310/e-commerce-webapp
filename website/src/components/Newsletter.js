import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../response";

const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #81b29a;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 40px;
`;

const Desc = styled.div`
  margin-bottom: 10px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #f4f1de;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  background-color: #f4f1de;
  flex: 10;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  background-color: #f4f1de;
  border: none;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get updated news in time.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

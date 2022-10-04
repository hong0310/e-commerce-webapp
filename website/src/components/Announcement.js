import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #81b29a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Super deal! Free shipping on orders over $30!</Container>;
};

export default Announcement;

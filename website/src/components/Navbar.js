import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../response";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ height: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightGrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;

const MenuChoice = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px", flex: 2 })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 15 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Hong</Logo>
        </Center>
        <Right>
          <MenuChoice>Register</MenuChoice>
          <MenuChoice>Sign In</MenuChoice>
          <Link to="/cart">
            <MenuChoice>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuChoice>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

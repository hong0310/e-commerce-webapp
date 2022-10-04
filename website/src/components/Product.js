import React from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  cursor: pointer;
  border-radius: 1.5%;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f1de;
  position: relative;
  border-radius: 1.5%;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 80%;
  z-index: 2;
  border-radius: 1.5%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.6s ease;

  &:hover {
    background-color: #f4f1de;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <AddShoppingCartIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

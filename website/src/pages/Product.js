import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../response";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from "react";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Image = styled.img`
  width: 100%;
  ${mobile({ height: "40%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h3`
  ${mobile({ textAlign: "center" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  ${mobile({ margin: "20px" })}
`;

const Price = styled.span`
  font-size: 20px;
  ${mobile({ margin: "20px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 50px 0px;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const FilterTitle = styled.span`
  font-size: 15px;
`;

const FilterColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 3px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 8px;
  border: 1px solid teal;
  backgroud-color: white;
  cursor: pointer;
  &:hover {
    backgound-color: red;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //update cart
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../response";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2cc8f;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ width: "80%" })}
`;

const Logo = styled.h1`
  flex: 1;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3d405b;
  color: #f4f1de;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ width: "80%" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Hong</Logo>
        <Desc>Fashion Nature Youth</Desc>
        <SocialContainer>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Kids</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{ marginRight: "10px" }} />
          Address: 7 Loop Ave, PA
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          Phone: +1 123 45 67
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          Email: contact@hong.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

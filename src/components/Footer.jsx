import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  Mail,
} from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 10px;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>VELANTO.</Logo>
        <Desc>
          Welcome to Velanto, your favorite exclusive online boutique.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
      <Right>
        <Title></Title>
        <ContactItem>
          <Mail />
          contact@velanto.com
        </ContactItem>
        <ContactItem>
          <Phone />+ 1 234 56 918
        </ContactItem>
        <ContactItem>
          <Room />
          236 Oxford Street, London W1C 1DE
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

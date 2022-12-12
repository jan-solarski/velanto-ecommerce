import styled from "styled-components";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 75%;
`;
const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  //gap: 5px;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: whitesmoke;
    transform: scale(1.05);
  }
`;

export const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

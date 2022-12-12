import styled from "styled-components";
import { popularProducts } from "../data.js";
import { Product } from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <Product item={product} key={product.id} />;
      })}
    </Container>
  );
};

import React from "react";
import styled from "styled-components";
import ProductsList from "../components/products/Product";
import Cart from "../components/cart/Cart";

const Main = () => {
  return (
    <Container>
      <ProductsList />
      <Cart />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media (min-width: 950px) {
    background-color: #0c1b23;
  }
`;

export default Main;

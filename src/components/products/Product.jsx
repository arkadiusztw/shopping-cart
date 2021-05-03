import React from "react";
import styled from "styled-components";
import Item from "./ProductItem";
import { useSelector } from "react-redux";

export const ProductsList = () => {
  const products = useSelector((state) => state.products);

  const productItem = products.map((item, index) => (
    <Item key={index} {...item} />
  ));

  return (
    <Box>
      <Wrapper>{productItem}</Wrapper>
    </Box>
  );
};

export default ProductsList;

const Box = styled.div`
  overflow: hidden;

  @media (min-width: 950px) {
    display: flex;
    width: 70%;
    height: 100vh;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 2;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 100px;

  @media (min-width: 950px) {
    position: relative;
    display: inline-flex;
    max-height: 100%;
    /* height: 100vh; */
    height: auto;
  }
`;

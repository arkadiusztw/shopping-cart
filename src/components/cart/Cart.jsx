import React, { useState } from "react";
import styled, { css } from "styled-components";
import Item from "./CartItem";
import { MdClose } from "react-icons/md";
import { AiTwotoneShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false);
  const switchView = () => {
    setOpen(!open);
  };
  const CartTotalPrice = () => {
    const items = useSelector((state) => state.cart.items);
    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    return total.toFixed(2) + " PLN";
  };
  const productItem = cart.map((item, index) => <Item key={index} {...item} />);

  return (
    <>
      {open ? (
        <>
          <IconCloseBox>
            <IconClose onClick={switchView} />
          </IconCloseBox>
        </>
      ) : (
        <IconCartBox onClick={switchView}>
          <IconOpen />
          {cart.length > 0 && <Counter>{cart.length}</Counter>}
        </IconCartBox>
      )}
      <Box visible={open}>
        <Wrapper>
          <Header>
            <Title>Koszyk</Title>
            <TotalPrice>
              <CartTotalPrice />
            </TotalPrice>
          </Header>
          {productItem}
          {cart.length === 0 && <Notice>Brak produktów w koszyku</Notice>}
        </Wrapper>
      </Box>
    </>
  );
};
const Box = styled.div`
  overflow: hidden;
  display: ${(props) => (props.visible ? "flex" : "none")};

  @media (min-width: 950px) {
    position: absolute;
    width: 30%;
    top: 0;
    right: 0;
    height: 100vh;
    background: #0c1e27;
    display: flex;
    align-items: baseline;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fffffff7;
  border-radius: 20px;
  overflow-y: auto;
  z-index: 10;
  transition: all 1s linear;
  @media (min-width: 950px) {
    position: relative;
    display: inline-flex;
    height: auto;
    background: transparent;
    padding: 10px;
  }
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  @media (min-width: 950px) {
    margin-top: 5vh;
  }
`;

const Title = styled.span`
  font-weight: bold;
  color: black;
  padding: 10px;
  @media (min-width: 950px) {
    font-size: 2rem;
    color: white;
  }
`;

const Notice = styled.div`
  width: 100%;
  color: black;
  padding: 10px;
  text-align: center;
  @media (min-width: 950px) {
    font-size: 1.5rem;
    color: white;
  }
`;
const Icons = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 10px;
  font-size: 3rem;
  color: white;
  z-index: 99;
  background: black;
  border: 0.5px solid white;
  @media (min-width: 950px) {
    display: none;
  }
`;
const IconCartBox = styled.div`
  ${Icons};
`;
const IconCloseBox = styled.div`
  ${Icons};
`;
const IconOpen = styled(AiTwotoneShopping)`
  padding: 10px;
`;
const IconClose = styled(MdClose)`
  padding: 10px;
`;
const Counter = styled.span`
  font-size: 1.5rem;
  margin-right: 5px;
`;
const TotalPrice = styled.span`
  color: black;
  padding: 10px;
  width: 100%;
  display: block;
  @media (min-width: 950px) {
    font-size: 1.5rem;
    color: white;
    width: 100%;
  }
`;

export default Cart;

import React from "react";
import styled from "styled-components";
import Button from "../buttons/singleButton";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../actions/CartActions";

const Item = ({ id, cover, title, price, currency, quantity }) => {
  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFromCart({ id }));
  };

  return (
    <Wrapper>
      <Cover>
        <Image alt={title} src={cover}></Image>
      </Cover>
      <Title>{title}</Title>
      <Details>
        <Quantity>x{quantity}</Quantity>
        <Price>
          {price} {currency}
        </Price>
        <RemoveItem onClick={removeItem}>
          <AiTwotoneDelete />
        </RemoveItem>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 95vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
  color: black;
  border: 0.5px solid #ffffff17;
  background-color: #ffffff1c;
  @media (min-width: 950px) {
    width: 100vw;
    max-width: 600px;
    color: white;
    margin: 2px;
    &:hover {
      background-color: #ffffff29;
    }
  }
`;

const Cover = styled.div``;
const Title = styled.span`
  margin: 10px;
  font-weight: bold;
  width: 35%;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 45%;
`;
const Quantity = styled.span`
  margin: 10px;
  white-space: nowrap;
  text-align: right;
`;
const Price = styled.span`
  margin: 3px;
  text-align: right;
  width: 40%;
`;

const RemoveItem = styled(Button)`
  margin: 10px;
  position: relative;
  display: flex;
`;
const Image = styled.img`
  width: 12vw;
  @media (min-width: 950px) {
    width: 50px;
  }
`;

export default Item;

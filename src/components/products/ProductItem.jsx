import React from "react";
import styled from "styled-components";
import Button from "../buttons/singleButton";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../../actions/CartActions";
import { useDispatch } from "react-redux";

export const Item = ({ id, title, cover, availability, price, currency }) => {
  const dispatch = useDispatch();

  const addProductToCart = (e) => {
    e.preventDefault();
    const quantity = 1;
    dispatch(addToCart({ id, title, cover, price, currency, quantity }));
  };

  return (
    <Wrapper>
      <Cover availability={availability}>
        <Image alt={title} src={cover}></Image>
      </Cover>
      <Title>{title}</Title>
      {price != null && availability === true ? (
        <Details>
          <Price>
            {price} {currency}
          </Price>
          <AddtoCartBtn onClick={addProductToCart}>
            <FiShoppingCart />
          </AddtoCartBtn>
        </Details>
      ) : (
        <>
          <Availability>Produkt jest aktualnie niedostępny.</Availability>
        </>
      )}
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  position: relative;
  width: 40%;
  height: auto;
  min-height: 190px;
  background: white;
  margin: 2.5vw;
  border: 0.5px solid gainsboro;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  max-width: 215px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 33px 0px;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  @media (min-width: 950px) {
    max-width: 255px;
    width: 100%;
    margin: 1vw;
    max-height: 560px;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Cover = styled.div`
  filter: ${(props) =>
    props.availability ? "opacity(1)" : "opacity(0.3) grayscale(1)"};
`;
const Title = styled.span`
  margin: 10px;
  text-align: center;
  font-weight: bold;
  min-height: 35px;
`;
const Availability = styled.span`
  margin: 10px;
  text-align: center;
`;
const Price = styled.span`
  margin: 10px;
`;
const AddtoCartBtn = styled(Button)`
  margin: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;

import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  margin: 0 auto;
  padding: 5px;
  border-radius: 10px;
  background: #efefef;

  &:hover {
    background: #cccccc;
  }
`;

export default Button;

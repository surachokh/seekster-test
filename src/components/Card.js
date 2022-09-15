import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../common/services";
import Text from "./Text";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px #ddd;
  box-shadow: 10px 10px 20px #eee;
  border-radius: 16px;

  max-width: 310px;
`;

const ImageWrapper = styled.img`
  object-fit: cover;
  min-width: 310px;
  min-height: 230px;
  border-radius: 16px 16px 0 0;

  src: ${(props) => props.src};
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const PriceTag = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 1;
  flex-grow: 1;
`;



export default function Card(props) {
  const navigate = useNavigate();

  const handleClick = (e, id) => {
    e.preventDefault();
    navigate(`detail/${id}`);
  };

  return (
    <CardWrapper onClick={(e) => handleClick(e, props.id)}>
      <ImageWrapper src={props.img}></ImageWrapper>
      <Description>
        <Text
          fontSize={`12px`}
          style={{ flexBasis: 100, flexGrow: 2 }}
          display="flex"
          alignItems="center"
        >
          {props.children}
        </Text>
        <PriceTag>
          <Text fontSize={"10px"} color="pricetag" textAlign="center">
            เริ่มต้นที่
          </Text>
          <Text fontSize={2} color="info" textAlign="center">
            {currencyFormat(props.price)}
          </Text>
        </PriceTag>
      </Description>
    </CardWrapper>
  );
}

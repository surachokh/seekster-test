import React from "react";
import styled from "styled-components";
import { currencyFormat, dateFormat, timeFormat } from "../common/services";
import Text from "./Text";
import { IoCalendar } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: 10px 10px 20px #eee;
  margin-bottom: 10px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceWrapper = styled.div`
  display: flex;
`;

export default function OrderCard(props) {
  if (!props.service) return;

  return (
    <CardWrapper>
      <DetailWrapper>
        <Text fontSize={1} fontWeight={800}>
          {props.service.name}
        </Text>
        <Text fontSize="16px" p={2} fontWeight={800}>
          <IoCalendar color="#027aff" style={{ marginRight: "8px" }} />
          {` ${dateFormat(props.updatedAt)} `}
          <FaRegClock color="#027aff" style={{ marginRight: "8px" }} />
          {` ${timeFormat(props.updatedAt)} `}
        </Text>
      </DetailWrapper>
      <PriceWrapper>
        <Text fontSize={1} fontWeight={800} mr={2} color="pricetag">
          ราคา
        </Text>
        <Text fontSize={1} fontWeight={800} color="info">
          {currencyFormat(props.service.price)}
        </Text>
      </PriceWrapper>
    </CardWrapper>
  );
}

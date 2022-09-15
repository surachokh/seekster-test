import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HOST_URL } from "../common/config";
import OrderCard from "../components/OrderCard";
import Text from "../components/Text";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 46px 90px;
`;

const OrderWrapper = styled.div`
  padding: 0px 90px;
  margin-top: 48px;
`;

export default function Order() {
  const url = `${HOST_URL}/v1/orders`;
  const navigate = useNavigate();
  const [data, setData] = useState();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Please Login");
      navigate("/");
    } else {
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setData(response);
        });
    }
  }, []);

  return (
    <Content>
      <Text fontSize={4} fontWeight={800}>
        รายการ
      </Text>
      <OrderWrapper>
        {data &&
          data.map((order, index) => {
            return (
              <OrderCard
                key={index}
                service={order.service}
                updatedAt={order.updatedAt}
              />
            );
          })}
      </OrderWrapper>
    </Content>
  );
}

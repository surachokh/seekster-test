import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HOST_URL } from "../common/config";
import { currencyFormat } from "../common/services";
import Button from "../components/Button";
import Text from "../components/Text";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 46px 90px;
`;

export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const url = `${HOST_URL}/v1/services/${params.id}`;
  const bookUrl = `${HOST_URL}/v1/services/${params.id}/booking`;
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  const handleClick = () => {
    fetch(bookUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      navigate("/order");
    });
  };

  return (
    <>
      {data && (
        <Content>
          <Text fontSize={4} fontWeight={800}>
            {data.name}
          </Text>
          <Text fontSize={3} fontWeight={800}>
            {currencyFormat(data.price)}
          </Text>
          <Text my={4} fontSize={1} style={{ whiteSpace: "pre-wrap" }}>
            {data.description}
          </Text>
          <Button onClick={handleClick} style={{ backgroundColor: "#027aff" }}>
            จองบริการ
          </Button>
        </Content>
      )}
    </>
  );
}

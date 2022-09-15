import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HOST_URL } from "../common/config";
import Card from "../components/Card";
import Text from "../components/Text";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 381px;
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  margin-top: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 46px 90px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 38px;
`;

export default function Home() {
  const [serviceData, setServiceData] = useState();

  const url = `${HOST_URL}/v1/services`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setServiceData(response);
      });
  }, []);

  return (
    <>
      <img
        src="housewife.png"
        alt="housewife.png"
        style={{ position: "absolute", top: 0, zIndex: -1, width: "100%" }}
      />
      <Header>
        <Text fontSize={4}>คำบรรยายต่าง ๆ นานา</Text>
        <Description>
          <Text fontSize={1}>
            เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน
            ทุกๆด้านอย่างที่คุณต้องการ
          </Text>
        </Description>
      </Header>
      <Content>
        <Text fontSize={3} mb={4}>
          งานบริการ
        </Text>
        <GridWrapper>
          {serviceData &&
            serviceData.map((data, index) => {
              return (
                <Card
                  key={index}
                  img={data.picture}
                  price={data.price}
                  id={data._id}
                >
                  {data.name}
                </Card>
              );
            })}
        </GridWrapper>
      </Content>
    </>
  );
}

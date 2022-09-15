import React from "react";
import styled from "styled-components";
import Text from "./Text";

const ButtonWrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 8px;
  :hover {
    cursor: pointer;
  }
`;

export default function Button(props) {
  return (
    <ButtonWrapper {...props}>
      <Text color="white" fontWeight={800}>
        {props.children}
      </Text>
    </ButtonWrapper>
  );
}

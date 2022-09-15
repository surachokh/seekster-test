import styled from "styled-components";
import {
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";

const Text = styled.div`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${position}
`;

export default Text;

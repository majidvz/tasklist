import styled from "styled-components";
import { UIKitColors } from "../../UIKit/colors";

export const HeaderWrapper = styled.header`
  background-color: transparent;
  color: ${UIKitColors.text.primary};

  .title {
    font-family: sans-serif;
    font-size: 32px;
    line-height: 48px;
    color: ${UIKitColors.text.primary};
    font-weight: 700;
  }
`;

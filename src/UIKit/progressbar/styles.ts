import styled from "styled-components";
import { UIKitColors } from "../colors";

export const ProgressBarWrapper = styled.svg`
  transform: rotate(-90deg);
  overflow: visible;

  circle {
    fill: none;
  }

  .background {
    stroke: ${UIKitColors.text.secondary};
  }

  .bar {
    stroke: ${UIKitColors.primary.default};
    transition: stroke-dashoffset 0.5s;
  }
`;

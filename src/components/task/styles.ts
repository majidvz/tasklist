import styled from "styled-components";
import { UIKitColors } from "../../UIKit/colors";

export const TaskWrapper = styled.li`
  background-color: ${UIKitColors.white};
  padding: 16px;
  padding-right: 32px;
  border-radius: 16px;
  font-family: sans-serif;

  .section {
    &.context {
      width: 40%;
    }

    &:not(.context) {
      width: 15%;
    }

    &.actions {
      gap: 8px;
    }
  }

  .subtitle {
    font-size: 14px;
    line-height: 24px;
    color: ${UIKitColors.text.secondary};
  }

  .title {
    font-size: 20px;
    line-height: 32px;
    margin: 0;
    color: ${UIKitColors.text.primary};
    font-weight: 500;
  }

  .priority-context {
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;

    &.high {
      color: ${UIKitColors.danger.default};
    }

    &.low {
      color: ${UIKitColors.success.default};
    }

    &.medium {
      color: ${UIKitColors.warning.default};
    }
  }
`;

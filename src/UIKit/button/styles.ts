import styled from "styled-components";
import { UIKitColors } from "../colors";

export const ButtonUIKitWrapper = styled.button`
  all: unset;
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  border-radius: 16px;
  transition: all ease-in-out 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .secondary {
    color: ${UIKitColors.text.primary};
  }

  &.filled {
    &:not(.secondary) {
      color: ${UIKitColors.white};
    }
    &.secondary {
      background-color: ${UIKitColors.secondary.default};

      &:hover {
        background-color: ${UIKitColors.secondary.hover};
      }

      &:active {
        background-color: ${UIKitColors.secondary.active};
      }
    }

    &.primary {
      background-color: ${UIKitColors.primary.default};

      &:hover {
        background-color: ${UIKitColors.primary.hover};
      }

      &:active {
        background-color: ${UIKitColors.primary.active};
      }
    }

    &.danger {
      background-color: ${UIKitColors.danger.default};

      &:hover {
        background-color: ${UIKitColors.danger.hover};
      }

      &:active {
        background-color: ${UIKitColors.danger.active};
      }
    }

    &.warning {
      background-color: ${UIKitColors.warning.default};

      &:hover {
        background-color: ${UIKitColors.warning.hover};
      }

      &:active {
        background-color: ${UIKitColors.warning.active};
      }
    }

    &.success {
      background-color: ${UIKitColors.success.default};

      &:hover {
        background-color: ${UIKitColors.success.hover};
      }

      &:active {
        background-color: ${UIKitColors.success.active};
      }
    }
  }

  &.outlined {
    &.primary {
      box-shadow: inset 0 0 0 2px ${UIKitColors.primary.default};
      color: ${UIKitColors.primary.default};

      &:hover {
        color: ${UIKitColors.primary.hover};
        box-shadow: inset 0 0 0 2px ${UIKitColors.primary.hover};
      }

      &:active {
        color: ${UIKitColors.primary.active};
        box-shadow: inset 0 0 0 2px ${UIKitColors.primary.active};
      }
    }

    &.warning {
      box-shadow: inset 0 0 0 2px ${UIKitColors.warning.default};
      color: ${UIKitColors.warning.default};

      &:hover {
        color: ${UIKitColors.warning.hover};
        box-shadow: inset 0 0 0 2px ${UIKitColors.warning.hover};
      }

      &:active {
        color: ${UIKitColors.warning.active};
        box-shadow: inset 0 0 0 2px ${UIKitColors.warning.active};
      }
    }

    &.success {
      box-shadow: inset 0 0 0 2px ${UIKitColors.success.default};
      color: ${UIKitColors.success.default};

      &:hover {
        color: ${UIKitColors.success.hover};
        box-shadow: inset 0 0 0 2px ${UIKitColors.success.hover};
      }

      &:active {
        color: ${UIKitColors.success.active};
        box-shadow: inset 0 0 0 2px ${UIKitColors.success.active};
      }
    }

    &.danger {
      box-shadow: inset 0 0 0 2px ${UIKitColors.danger.default};
      color: ${UIKitColors.danger.default};

      &:hover {
        color: ${UIKitColors.danger.hover};
        box-shadow: inset 0 0 0 2px ${UIKitColors.danger.hover};
      }

      &:active {
        color: ${UIKitColors.danger.active};
        box-shadow: inset 0 0 0 2px ${UIKitColors.danger.active};
      }
    }

    &.secondary {
      box-shadow: inset 0 0 0 2px ${UIKitColors.secondary.default};

      &:hover {
        box-shadow: inset 0 0 0 2px ${UIKitColors.secondary.hover};
      }

      &:active {
        box-shadow: inset 0 0 0 2px ${UIKitColors.secondary.active};
      }
    }
  }
`;

import styled from "styled-components";
import { UIKitColors } from "../colors";

export const InputWrapper = styled.input`
  all: unset;
  height: 48px;
  background-color: ${(props) =>
    props.disabled ? "#f5f5f5" : UIKitColors.white};
  border-radius: 8px;
  width: 100%;
  padding: 0 16px;
  box-shadow: inset 0 0 0 2px #eee;
  transition: all ease-in-out 0.3s;
  font-family: sans-serif;
  flex-shrink: 0;
  flex-basis: 0;
  box-sizing: border-box;

  ${(props) =>
    props.disabled
      ? ""
      : `  &:hover {
    box-shadow: inset 0 0 0 2px #ccc;
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${UIKitColors.primary.active};
  }`}
`;

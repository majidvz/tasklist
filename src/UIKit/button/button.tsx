import React from "react";
import { IButton } from "./IButton";
import { ButtonUIKitWrapper } from "./styles";

export const ButtonUIKit: React.FC<IButton> = ({ style, type, children }) => {
  return (
    <ButtonUIKitWrapper
      type="button"
      className={`${style} ${type} flex flex-row justify-center items-center`}
    >
      {children}
    </ButtonUIKitWrapper>
  );
};

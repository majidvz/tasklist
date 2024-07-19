import { FC } from "react";
import { IButton } from "./model";
import { ButtonUIKitWrapper } from "./styles";

export const ButtonUIKit: FC<IButton> = ({
  style,
  type,
  children,
  onClick,
  className,
}) => {
  return (
    <ButtonUIKitWrapper
      type="button"
      className={`${style} ${type} flex flex-row justify-center items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </ButtonUIKitWrapper>
  );
};

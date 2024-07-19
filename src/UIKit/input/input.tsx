import { FC, InputHTMLAttributes } from "react";
import { InputWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputUIKit: FC<InputProps> = ({ ...props }) => {
  return <InputWrapper {...props} />;
};

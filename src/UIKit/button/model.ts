import { ReactNode } from "react";

export interface IButton {
  style?: string;
  type: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

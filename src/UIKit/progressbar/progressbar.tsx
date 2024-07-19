import { FC } from "react";
import { IProgressBar } from "./model";
import { ProgressBarWrapper } from "./styles";

export const ProgressBarUIKit: FC<IProgressBar> = ({
  size = 24,
  percentage = 0,
}) => {
  const circumference: number = size * Math.PI;
  const strokeSize: number = size / 10;
  const strokeDashoffset: number = (1 - percentage / 100) * circumference;
  const radius: number = size / 2;

  return (
    <ProgressBarWrapper
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
    >
      <circle
        className="background"
        cx={radius}
        cy={radius}
        r={radius}
        strokeWidth={strokeSize}
      ></circle>
      <circle
        className="bar"
        cx={radius}
        cy={radius}
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={strokeSize}
      ></circle>
    </ProgressBarWrapper>
  );
};

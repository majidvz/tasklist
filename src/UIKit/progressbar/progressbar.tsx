import React from "react";
import { IProgressBar } from "./IProgressbar";
import { ProgressBarWrapper } from "./styles";

export const ProgressBarUIKit: React.FC<IProgressBar> = ({
  size = 24,
  precentage = 100,
}) => {
  const circumference: number = 2 * size * Math.PI;
  const circumferencePercentage: number =
    (1 - precentage / 100) * circumference;
  const strokeSize: number = size / 10;
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
        strokeDashoffset={circumferencePercentage}
        strokeWidth={strokeSize}
      ></circle>
    </ProgressBarWrapper>
  );
};

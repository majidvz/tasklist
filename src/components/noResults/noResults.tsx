import { FC } from "react";
import { NoResultsWrapper } from "./styles";

export const NoResults: FC = () => {
  return (
    <NoResultsWrapper className="w-full flex flex-col justify-center items-center py-40">
      <h2 className="text-5xl font-medium">No Results!</h2>
    </NoResultsWrapper>
  );
};

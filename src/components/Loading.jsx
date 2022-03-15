import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <InfinitySpin color="blue" />
    </div>
  );
};

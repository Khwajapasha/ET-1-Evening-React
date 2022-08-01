import React from "react";
export const CommonButton = (props) => {
  const { kyaBhi, kuchBhi } = props;
  return (
    <>
      <button>{kyaBhi}</button>
      <button>{kuchBhi}</button>
    </>
  );
};

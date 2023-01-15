import React from "react";

import { SIcon } from "./styles";

const ArrowIcon: React.FC = ({ ...rest }) => {
  return (
    <SIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        d="M5 13.47l1.41-1.41 5.1 5.1V3h1.99v14.15l5.09-5.09L20 13.47l-7.5 7.5-7.5-7.5z"
        fill="currentColor"
      />
    </SIcon>
  );
};

export default ArrowIcon;

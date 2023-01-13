import React, { FC } from "react";

import { SLoading, SIcon } from "./styles";

interface ILoading {
  text?: string;
}

const Loading: FC<ILoading> = ({ text = "" }) => {
  return (
    <SLoading>
      <SIcon /> {text}
    </SLoading>
  );
};

export default Loading;

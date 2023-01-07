import React, { FC, ReactNode } from "react";

import { SCell } from "./styles";

interface ICell {
  children: ReactNode;
}

const Cell: FC<ICell> = ({ children }) => {
  return <SCell>{children}</SCell>;
};

export default Cell;

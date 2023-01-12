import React, { FC, ReactNode } from "react";

import { SCell } from "./styles";

interface ICell {
  children: ReactNode;
}

const Cell: FC<ICell> = ({ children, ...rest }) => {
  return <SCell {...rest}>{children}</SCell>;
};

export default Cell;

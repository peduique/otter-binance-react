import styled from "styled-components";

import Cell from "../Cell";

export const SOrder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SCell = styled(Cell)`
  color: #fff;
`;

export const SPriceCell = styled(Cell)`
  color: ${({ $variant }: { $variant?: string }) =>
    $variant === "asks" ? "#FE5B59" : "#2FBD71"};
`;

export const SHeaderCell = styled(Cell)`
  color: #8597aa;
  padding: 5px 0;
`;

import styled from "styled-components";
import Cell from "../Cell";

export const SOrder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SPriceCell = styled(Cell)`
  color: ${({ $variant }: { $variant?: string }) =>
    $variant === "asks" ? "red" : "blue"};
`;

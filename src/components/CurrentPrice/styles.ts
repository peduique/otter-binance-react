import styled from "styled-components";

import ArrowIcon from "../Icons/ArrowIcon";

type TPriceTheme = {
  [key: string]: {
    color: string;
  };
};

const theme: TPriceTheme = {
  negative: { color: "#FE5B59" },
  positive: { color: "#2FBD71" },
  neutral: { color: "#fff" },
};

export const SWrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #191a20;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #fff;
  margin: 0;
`;

export const SPreviousPrice = styled.div`
  font-size: 12px;
  color: #888;
`;

export const SArrowIcon = styled(ArrowIcon)`
  width: 20px;
  height: 20px;
`;

export const SCurrentPrice = styled.div(
  ({ $variant }: { $variant: string }) => ({
    ...theme[$variant as keyof TPriceTheme],

    display: "flex",
    alignItems: "center",
    fontSize: "20px",

    ...($variant === "positive" && {
      [SArrowIcon]: { transform: `rotate(180deg)` },
    }),

    ...($variant === "neutral" && {
      [SArrowIcon]: { display: "none" },
    }),
  })
);

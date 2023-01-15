import styled from "styled-components";

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

export const SCurrentPrice = styled.div`
  font-size: 20px;

  ${({ $variant }: { $variant: string }) => ({
    ...theme[$variant as keyof TPriceTheme],
  })}
`;

export const SPreviousPrice = styled.div`
  font-size: 12px;
  color: #888;
`;

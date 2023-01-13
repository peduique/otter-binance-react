import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const SLoading = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #fff;
  font-size: 30px;
`;

export const SIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${animation} 1s linear infinite;
`;

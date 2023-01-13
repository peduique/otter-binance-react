import styled from "styled-components";

export const SOrderBookList = styled.div`
  background: #282a35;
  padding: 20px;
  flex: 1;
  width: 100%;
  overflow: auto;
  box-shadow: 0 0 2px #191a20;

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

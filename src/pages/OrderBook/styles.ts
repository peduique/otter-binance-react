import styled from "styled-components";

export const SContainer = styled.div`
  margin: 30px auto;
  width: 1260px;

  @media (max-width: 767px) {
    width: initial;
    margin: 30px 20px;
  }
`;

export const SOrderBookWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const STitle = styled.h1`
  color: #fff;
`;

export const SCoinTitle = styled.h2`
  text-transform: uppercase;
  color: #fff;
`;

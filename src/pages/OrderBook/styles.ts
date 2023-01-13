import styled from "styled-components";

export const SContainer = styled.div`
  margin: 30px auto;
  width: 500px;

  @media (max-width: 767px) {
    width: initial;
    margin: 30px 20px;
  }
`;

export const SOrderBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 0 0 30px;
`;

export const SCoinTitle = styled.h2`
  text-transform: uppercase;
  color: #fff;
  margin: 0;
`;

export const SCurrentPrice = styled.p`
  background: #191a20;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #fff;
  margin: 0;
`;

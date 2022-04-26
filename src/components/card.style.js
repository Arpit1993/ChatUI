import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

export const Image = styled.img`
  height: 50px;
  width: 50px;
`;

export const OrderDetails = styled.section`
  flex-grow: 2;
  margin-left: 1rem;
`;

export const ProductHeading = styled.h4``;

export const ProductOrderNumber = styled.p`
  font-size: 14px;
`;

export const CardsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
  &:hover {
    cursor: pointer;
  }
`;

export const DateDisplay = styled.p`
  flex-grow: 1;
  text-align: right;
  color: #999ea4;
  font-size: 12px;
`;

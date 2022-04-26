import React from "react";
import { getDate } from "../utils/utils";
import {
  Image,
  OrderDetails,
  ProductHeading,
  ProductOrderNumber,
  CardsContainer,
  DateDisplay
} from "./card.style";
import "./card.css";

export const Card = (props) => {
  const {
    id,
    imageURL,
    orderId,
    title,
    latestMessageTimestamp,
    isActive,
    handleCardClick,
  } = props;
  return (
    <React.Fragment>
      <CardsContainer
        className={isActive ? "Active" : ""}
        onClick={() => handleCardClick(id)}
      >
        <Image src={imageURL}></Image>
        <OrderDetails>
          <ProductHeading>{title}</ProductHeading>
          <ProductOrderNumber>{orderId}</ProductOrderNumber>
        </OrderDetails>
        <DateDisplay>{getDate(latestMessageTimestamp)}</DateDisplay>
      </CardsContainer>
    </React.Fragment>
  );
};

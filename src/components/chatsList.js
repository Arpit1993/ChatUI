import React, { useState, useEffect } from "react";
import {
  ChatsListCntr,
  Heading,
  SearchInput,
  InputHeadingContainer,
} from "./chatsList.style";
import { Card } from "./card";
import { showMessages } from "../actions/messagePanel";
import { getFilteredResult, getAllResult } from "../actions/chatDetails";
import { useDispatch, useSelector } from "react-redux";

export const ChatsList = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const chatDetails = useSelector((state) => state.chatDetails.chatDetails);
  const dispatch = useDispatch();

  const handleCardClick = (selectedId) => {
    dispatch(showMessages(selectedId));
    setSelectedItem(selectedId);
  };

  const handleOnChange = (e) => {
    const searchString = e.target.value;
    if (e.target.value === "") {
      dispatch(getAllResult());
    } else {
      dispatch(getFilteredResult({ searchQuery: searchString }));
    }
  };

  return (
    <React.Fragment>
      <ChatsListCntr>
        <InputHeadingContainer>
          <Heading>Filter by Title/Order ID</Heading>
          <SearchInput
            placeholder="Start typing to search"
            onChange={(e) => handleOnChange(e)}
          ></SearchInput>
        </InputHeadingContainer>
        {chatDetails &&
          chatDetails.length > 0 &&
          chatDetails.map((profile, index) => {
            const { id, imageURL, orderId, title, latestMessageTimestamp } =
              profile;

            return (
              <Card
                id={id}
                imageURL={imageURL}
                orderId={orderId}
                title={title}
                latestMessageTimestamp={latestMessageTimestamp}
                isActive={selectedItem === id ? true : false}
                handleCardClick={handleCardClick}
                key={index}
              ></Card>
            );
          })}
      </ChatsListCntr>
    </React.Fragment>
  );
};

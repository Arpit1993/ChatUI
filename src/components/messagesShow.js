import React from "react";
import { useDispatch } from "react-redux";
import { getTime, myRandom } from "../utils/utils";
import {
  NoMessageCase,
  NoMessageContent,
  DateContainer,
  DateContent,
  MessageContainer,
  BotSentMessage,
  BotSentMessageContainer,
  UserSentMessage,
  UserSentMessageContainer,
  TimeStamp,
  UserSentMessageCntr,
  BotSentMessageCntr,
  OptionsContainer,
  OptionsListContainer,
  OptionsListContent,
  OptionsMessage,
  OptionsWrapper,
  OptionsSubMessage,
  OptionsListContentContainer,
} from "./messagesShow.style";
import { addMessage } from "../actions/messagePanel";

const handleRequestCallClick = (item, id, dispatch) => {
  const num = parseInt(id) + myRandom(1);
  const messageToSend = {
    id: id,
    content: {
      message: "I want a callback",
      messageType: "text",
      sender: "USER",
      timestamp: Date.now(),
      messageId: `msg${num}`,
    },
  };

  dispatch(addMessage(messageToSend));
};

const showOptionedMessage = (item, id, dispatch, index, arr) => {
  const { message, options } = item;
  const isLastMessage = index === arr.length - 1;
  return (
    <>
      <OptionsContainer>
        <OptionsWrapper>
          <OptionsMessage>{message}</OptionsMessage>
          <OptionsListContainer>
            {options.map((option) => {
              const { optionText, optionSubText } = option;
              return (
                <OptionsListContentContainer isLast={isLastMessage}>
                  {optionText === "Request a call" ? (
                    <OptionsListContent
                      onClick={() => handleRequestCallClick(item, id, dispatch)}
                    >
                      {optionText}
                    </OptionsListContent>
                  ) : (
                    <OptionsListContent>{optionText}</OptionsListContent>
                  )}
                  <OptionsSubMessage>{optionSubText}</OptionsSubMessage>
                </OptionsListContentContainer>
              );
            })}
          </OptionsListContainer>
        </OptionsWrapper>
      </OptionsContainer>
    </>
  );
};

const showMessage = (date, messages, id, dispatch) => {
  if (messages.length === 0) {
    return;
  }
  return (
    <>
      <DateContainer>
        <DateContent>{date}</DateContent>
      </DateContainer>
      <MessageContainer>
        {messages.map((item, index, arr) => {
          const { message, messageId, messageType, sender, timestamp } = item;
          if (sender === "USER") {
            return (
              <UserSentMessageContainer>
                <UserSentMessageCntr>
                  <UserSentMessage>{message}</UserSentMessage>
                  <TimeStamp user={sender}>{getTime(timestamp)}</TimeStamp>
                </UserSentMessageCntr>
              </UserSentMessageContainer>
            );
          } else {
            if (messageType === "optionedMessage") {
              return showOptionedMessage(item, id, dispatch, index, arr);
            } else {
              return (
                <BotSentMessageContainer>
                  <BotSentMessageCntr>
                    <BotSentMessage>{message}</BotSentMessage>
                    <TimeStamp user={sender}>{getTime(timestamp)}</TimeStamp>
                  </BotSentMessageCntr>
                </BotSentMessageContainer>
              );
            }
          }
        })}
      </MessageContainer>
    </>
  );
};

export const MessageShow = (props) => {
  const { messages, id } = props;
  const showNoMessage = messages.size === 0;
  const list = Array.from(messages.entries());
  const dispatch = useDispatch();
  return (
    <>
      {showNoMessage && (
        <NoMessageCase>
          <NoMessageContent>Send a message to start chatting </NoMessageContent>
        </NoMessageCase>
      )}
      {list.map((item) => {
        const [key, value] = item;
        return showMessage(key, value, id, dispatch);
      })}
    </>
  );
};

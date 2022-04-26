import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { myRandom } from "../utils/utils";
import {
  MessagePanelContainer,
  MessageDisplayArea,
  UserInputMessage,
  ImageTitleContainer,
  Image,
  Title,
  SendButton,
  UserInputContianer,
} from "./messagePanel.style";
import { MessageShow } from "./messagesShow";
import { addMessage } from "../actions/messagePanel";

export const MessagePanel = (props) => {
  const { showPanel, messageDetails } = props;
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const sendMessage = (id) => {
    const text = inputRef.current.value;
    const num = parseInt(id) + myRandom(1);
    const messageToSend = {
      id: id,
      content: {
        message: text,
        messageType: "text",
        sender: "USER",
        timestamp: Date.now(),
        messageId: `msg${num}`,
      },
    };
    dispatch(addMessage(messageToSend));
    inputRef.current.value = "";
  };

  if (!messageDetails.length) {
    return;
  }

  const { id, title, imageURL, groupedMessages } = messageDetails[0];
  return (
    showPanel &&
    messageDetails.length > 0 && (
      <MessagePanelContainer>
        <ImageTitleContainer>
          <Image src={imageURL} />
          <Title>{title}</Title>
        </ImageTitleContainer>
        <MessageDisplayArea>
          <MessageShow messages={groupedMessages} id={id} />
        </MessageDisplayArea>
        <UserInputContianer>
          <UserInputMessage
            ref={inputRef}
            placeholder="Type a message"
          ></UserInputMessage>
          <SendButton onClick={() => sendMessage(id)}>
            <i className="fa fa-send" style={{ color: "#d0d0cd" }}></i>
          </SendButton>
        </UserInputContianer>
      </MessagePanelContainer>
    )
  );
};

import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const NoMessageCase = styled.section`
  display: flex;
  height: 80vh;
  background-color: #e8eaed;
  justify-content: center;
  align-items: center;
`;

export const NoMessageContent = styled.p`
  font-weight: bold;
`;

export const DateContainer = styled.article`
  display: flex;
  justify-content: center;
  padding: 4px;
`;

export const DateContent = styled.p`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 12px;
`;

export const MessageContainer = styled.section``;

export const BotSentMessageContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0;
`;

export const BotSentMessage = styled.article``;

export const UserSentMessageContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
`;

export const UserSentMessage = styled.article``;

export const UserSentMessageCntr = styled.article`
  padding: 16px;
  background-color: #1a73e8;
  border-radius: 8px;
  color: #ffffff;
`;
export const BotSentMessageCntr = styled.article`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  color: #000000;
`;

export const TimeStamp = styled.p`
  font-size: 8px;
  text-align: right;
  color: ${(props) => (props.user === "USER" ? "#ffffff" : "#000000")};
`;

export const OptionsContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0;
`;

export const OptionsWrapper = styled.article`
  background-color: #ffffff;
  border-radius: 8px;
`;
export const OptionsListContainer = styled.article`
  background-color: ${prop => prop.isLast ? "#ffffff": "#d1d2d4"};

`;

export const OptionsListContent = styled.p`
  color: blue;
`;

export const OptionsMessage = styled.p`
  padding: 1rem;
`;
export const OptionsSubMessage = styled.p`
  color: grey;
`;
export const OptionsListContentContainer = styled.section`
  border-top: 1px solid grey;
  text-align: center;
  padding: 8px;
  cursor: pointer;
`;

import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MessagePanelContainer = styled.section`
  flex-grow: 1;
  position: relative;
`;

export const ImageTitleContainer = styled.article`
  display: flex;
  position: sticky;
  top: 0px;
  background-color: #ffffff;
`;

export const MessageDisplayArea = styled.section`
  max-height: 80vh;
  min-height: 80vh;
  overflow-y: scroll;
  background-color: #e8eaed;
`;

export const UserInputMessage = styled.input`
  position: absolute;
  bottom: 0px;
  border: none;
  width: 100%;
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
`;

export const Title = styled.h4`
  align-self: center;
  margin-left: 1rem;
`;

export const SendButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const UserInputContianer = styled.section`
  display: flex;
  border-top: 2px solid green;

`;

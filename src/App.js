import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatDetails } from "./actions/chatDetails";
import { Main } from "./App.style";
import { ChatsList } from "./components/chatsList";
import { MessagePanel } from "./components/messagePanel";
import "./global.css";

export default function App() {
  const dispatch = useDispatch();
  const showMessagePanel = useSelector(
    (state) => state.messageDetails.showMessagePanel
  );
  const userMessages = useSelector(
    (state) => state.messageDetails.messageDetails
  );
 
  useEffect(() => {
    dispatch(getChatDetails());
  }, []);

  return (
    <Main>
      <ChatsList />
      <MessagePanel
        showPanel={showMessagePanel}
        messageDetails={userMessages}
      />
    </Main>
  );
}

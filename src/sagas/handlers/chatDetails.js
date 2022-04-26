import { call, put, all } from "redux-saga/effects";
import { requestChatDetails } from "../requests/chats";
import { setChatDetails } from "../../actions/chatDetails";
import { setMessageChatDetails } from "../../actions/messagePanel";

export function* handleGetChatDetails() {
  try {
    const response = yield call(requestChatDetails);
    const { data } = response;
    yield all([put(setChatDetails(data)), put(setMessageChatDetails(data))]);
  } catch (error) {
    console.error(error);
  }
}

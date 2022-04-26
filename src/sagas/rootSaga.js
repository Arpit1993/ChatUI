import { takeLatest } from "redux-saga/effects";
import { GET_CHAT_DETAILS } from "../actions/actions_constants";
import { handleGetChatDetails } from "./handlers/chatDetails";

export function* watcherSaga() {
  yield takeLatest(GET_CHAT_DETAILS, handleGetChatDetails);
}

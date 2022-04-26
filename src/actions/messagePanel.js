import { SHOW_MESSAGES,SET_MESSAGE_CHAT_DETAILS, ADD_MESSAGE } from "./actions_constants";

export const showMessages = (id) => {
  return {
    type: SHOW_MESSAGES,
    payload: id
  };
};

export const setMessageChatDetails = (data) => {
    return {
      type: SET_MESSAGE_CHAT_DETAILS,
      payload: data
    };
  };

export const addMessage = (data) => {
    return{
        type: ADD_MESSAGE,
        payload: data
    }
}
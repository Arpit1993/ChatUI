import {
  SHOW_MESSAGES,
  SET_MESSAGE_CHAT_DETAILS,
  ADD_MESSAGE,
} from "../actions/actions_constants";
import { groupMessage } from "../utils/utils";
const initialState = {
  chatDetailsMessage: null,
  showMessagePanel: false,
  messageDetails: [],
};

export const messageDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGES:
      const returnedItem = state.chatDetailsMessage.filter((item) => {
        return parseInt(item.id) === parseInt(action.payload);
      });
      let groupedMessages = groupMessage(returnedItem);
      returnedItem[0].groupedMessages = groupedMessages;
      return { ...state, showMessagePanel: true, messageDetails: returnedItem };
      break;
    case SET_MESSAGE_CHAT_DETAILS:
      return { ...state, chatDetailsMessage: action.payload };
      break;
    case ADD_MESSAGE:
      const { id, content } = action.payload;
      const list = state.messageDetails[0].messageList.slice();
      list.push(content);
      state.messageDetails[0]["messageList"] = list;
      let newMessage = [state.messageDetails[0]];
      let groupedMessagesAdded = groupMessage(newMessage);
      newMessage[0].groupedMessages = groupedMessagesAdded;
      return { ...state, messageDetails: newMessage };

      break;
    default:
      return state;
  }
};

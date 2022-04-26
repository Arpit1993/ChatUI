import {
  SET_CHAT_DETAILS,
  GET_FILTERED_RESULT,
  GET_ALL_RESULT,
} from "../actions/actions_constants";

const initialState = {
  chatDetails: null,
  cacheChatDetails: null,
};

export const chatDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT_DETAILS:
      return {
        ...state,
        chatDetails: action.payload,
        cacheChatDetails: action.payload,
      };
      break;
    case GET_FILTERED_RESULT:
      const { searchQuery } = action.payload;
      let filteredList = state.chatDetails.filter((item) => {
        let text = item.title;
        if (item.title.toLowerCase().includes(searchQuery)) {
          return true;
        } else if (item.orderId.toLowerCase().includes(searchQuery)) {
          return true;
        } else {
          return false;
        }
      });
      return { ...state, chatDetails: filteredList };
      break;
    case GET_ALL_RESULT:
      let newList = state.cacheChatDetails;
      return { ...state, chatDetails: newList };
      break;
    default:
      return state;
  }
};

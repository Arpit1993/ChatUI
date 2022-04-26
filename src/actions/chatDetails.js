import {
  GET_CHAT_DETAILS,
  SET_CHAT_DETAILS,
  GET_FILTERED_RESULT,
  GET_ALL_RESULT
} from "./actions_constants";

export const getChatDetails = () => {
  return {
    type: GET_CHAT_DETAILS,
  };
};

export const setChatDetails = (data) => {
  return {
    type: SET_CHAT_DETAILS,
    payload: data,
  };
};

export const getFilteredResult = (data) => {
  return {
    type: GET_FILTERED_RESULT,
    payload: data,
  };
};

export const getAllResult = () => {
  return {
    type: GET_ALL_RESULT,
  };
};

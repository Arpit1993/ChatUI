import axios from "axios";

export function requestChatDetails() {
  return axios.request({
    method: "GET",
    url: "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
  });
}

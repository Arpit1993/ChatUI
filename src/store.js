import { combineReducers } from "redux";
import { chatDetailsReducer,messageDetailsReducer } from "./reducers/reducer";

const rootReducer = combineReducers({
 
  chatDetails: chatDetailsReducer,
  messageDetails: messageDetailsReducer
});
export default rootReducer;

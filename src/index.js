import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import rootReducer from "./store.js";
import { watcherSaga } from "./sagas/rootSaga";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

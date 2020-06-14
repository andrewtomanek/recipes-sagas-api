import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { rootReducer } from "./store/reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import startForman from "./store/sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(startForman);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

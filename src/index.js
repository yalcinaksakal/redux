import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// create store with a reducer function
import { createStore } from "redux";
import reducer from "./store/reducer";

// cconnecting react with redux we need react-redux lib
// npm install --save react-redux
import { Provider } from "react-redux";

//wrap your app with Provider component to connect react app with redux
const store = createStore(reducer);

// inject store to our app
//then go to container component and connect state
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

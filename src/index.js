import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./store/configureStore";

// import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider> 
    </Router>
  </Provider>,
  document.getElementById("root")
);

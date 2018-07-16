import React from "react";
//import { createStore, applyMiddleware } from "redux";
//import { Provider } from "react-redux";
//import { createLogger } from "redux-logger";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import JssProvider from "react-jss/lib/JssProvider";

//import { rootReducer } from "./App.reducer";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";

/*const loggerMiddleware = createLogger();

const preloadedState = {};

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(loggerMiddleware)
);*/

//<Provider store={store}></Provider>

export const ProvidersForApp = ({ children }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    {children}
  </JssProvider>
);

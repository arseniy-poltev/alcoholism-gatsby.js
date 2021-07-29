import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore as reduxCreateStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "."

const initialState = {}

const bindMiddleware = middlewares => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    return composeWithDevTools(applyMiddleware(...middlewares, logger))
  }
  return applyMiddleware(...middlewares)
}

const createStore = () =>
  reduxCreateStore(rootReducer, initialState, bindMiddleware([thunk]))
const reduxWrapper = ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)

export default reduxWrapper

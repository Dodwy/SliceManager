import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { combineReducers } from "redux"
import { manager, simpleSlice, nestedManager } from "../examples/base.stories"

export const rootReducer = combineReducers({
  manager: manager.slice.reducer,
  nestedManager: nestedManager.slice.reducer,
  slice: simpleSlice.reducer,
})

const managersMiddlewares = [
  manager.middleware,
  nestedManager.middleware,
]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }).concat(managersMiddlewares); // concat
  },
  devTools: true,
})

export const decorators = [
  (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
  ),
]


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
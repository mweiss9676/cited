import { configureStore } from "redux-starter-kit";
import thunk from "redux-thunk";
import { todoSlice } from "./slices/dashboard";
import { citationSlice } from "./slices/citation";
const middleware = [thunk];

const reducers = {
  todo: todoSlice.reducer,
  citation: citationSlice.reducer
};

const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;

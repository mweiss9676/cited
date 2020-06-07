import { createSlice, createSelector } from "redux-starter-kit";

const apiSlice = createSlice({
  slice: "api",
  initialState: {
    error: null,
    isLoading: false
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});

export const { setError, setIsLoading } = apiSlice.actions;

const stateSelector = state => state.api;

export const errorSelector = createSelector([stateSelector], state =>
  state !== null ? state.error : null
);

export const isLoadingSelector = createSelector([stateSelector], state =>
  state !== null ? state.isLoading : true
);

export { apiSlice };

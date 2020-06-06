import { createSlice, createSelector } from "redux-starter-kit";

const citationSlice = createSlice({
  slice: "citation",
  initialState: {
    error: null,
    isLoaded: false,
    citation: null
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoaded(state, action) {
      state.isLoaded = action.payload;
    }
  }
});

const { setError, setIsLoaded } = citationSlice.actions;

const citationSelector = state => state.citation;
export const isLoadedSelector = createSelector([citationSelector], state =>
  state !== null ? state.isLoaded : false
);

export { citationSlice };

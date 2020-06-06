import { createSlice, createSelector } from "redux-starter-kit";
import { getTest } from "../api/citation";

const citationSlice = createSlice({
  slice: "citation",
  initialState: {
    error: null,
    isLoading: true,
    citation: null
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

const { setError, setIsLoading } = citationSlice.actions;

export const fetchCitation = async (id = 0) => {
  try {
    const result = await getTest();
    return result;
  } catch (err) {}
};

const stateSelector = state => state.citation;

export const isLoadingSelector = createSelector([stateSelector], state =>
  state !== null ? state.isLoading : true
);

export const citationSelector = createSelector([stateSelector], state =>
  state !== null ? state.citation || {} : null
);

export { citationSlice };

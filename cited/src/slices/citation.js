import { createSlice, createSelector } from "redux-starter-kit";
import { getTest } from "../api/citation";

const citationSlice = createSlice({
  slice: "citation",
  initialState: {
    error: null,
    citation: null
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

const { setError } = citationSlice.actions;

export const fetchCitation = async (id = 0) => {
  try {
    const result = await getTest();
    return result;
  } catch (err) {}
};

const stateSelector = state => state.citation;

export const citationSelector = createSelector([stateSelector], state =>
  state !== null ? state.citation || {} : null
);

export { citationSlice };

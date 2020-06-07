import { useDispatch } from "react-redux";
import { createSlice, createSelector } from "redux-starter-kit";
import { getCitation } from "../api/citation";

const citationSlice = createSlice({
  slice: "citation",
  initialState: {
    error: null,
    citation: null
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setCitation(state, action) {
      state.citation = action.payload;
    }
  }
});

const { setError } = citationSlice.actions;

export const fetchCitation = (id = 0) => {
  return async dispatch => {
    try {
      const result = await getCitation(id);
      console.log("result");
      console.log(result);

      dispatch(citationSlice.actions.setCitation(result));
    } catch (err) {
      dispatch(citationSlice.actions.setError(err));
    }
  };
};

const stateSelector = state => state.citation;

export const citationSelector = createSelector([stateSelector], state =>
  state !== null ? state.citation || {} : null
);

export { citationSlice };

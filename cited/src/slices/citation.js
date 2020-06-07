import { useDispatch } from "react-redux";
import { createSlice, createSelector } from "redux-starter-kit";
import { getCitation, getCitations } from "../api/citation";

const citationSlice = createSlice({
  slice: "citation",
  initialState: {
    isLoaded: false,
    error: null,
    citation: null,
    citations: null
  },
  reducers: {
    setIsLoaded(state, action) {
      state.isLoaded = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setCitation(state, action) {
      state.citation = action.payload;
    },
    setCitations(state, action) {
      state.citations = action.payload;
    }
  }
});

export const { setError, setIsLoaded } = citationSlice.actions;

export const fetchCitation = (id = 0) => {
  return async dispatch => {
    dispatch(setIsLoaded(true));

    try {
      const result = await getCitation(id);

      dispatch(citationSlice.actions.setCitation(result));
    } catch (err) {
      dispatch(citationSlice.actions.setError(err));
    }
  };
};

export const fetchCitations = () => {
  return async dispatch => {
    dispatch(setIsLoaded(true));

    try {
      const result = await getCitations();

      dispatch(citationSlice.actions.setCitations(result));
    } catch (err) {
      dispatch(citationSlice.actions.setError(err));
    }
  };
};

const stateSelector = state => state.citation;

export const isLoadedSelector = createSelector([stateSelector], state =>
  state !== null ? state.isLoaded : false
);

export const citationSelector = createSelector([stateSelector], state =>
  state !== null ? state.citation || null : {}
);

export const citationsSelector = createSelector([stateSelector], state =>
  state !== null ? state.citations || null : []
);

export { citationSlice };

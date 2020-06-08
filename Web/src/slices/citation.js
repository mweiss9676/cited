import { createSlice, createSelector } from "redux-starter-kit";
import { getCitation, getCitations } from "../api/citation";

const citationSlice = createSlice({
  slice: "citation",
  initialState: {
    error: null,
    citation: null,
    citations: null,
    categories: null
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
    },
    setCategories(state, action) {
      state.categories = action.payload;
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

export const fetchCategories = () => {
  return async dispatch => {
    try {
      //const result = await getCategories();
      const result = [
        {
          id: 1,
          name: "test 1",
          parentCategoryId: null,
          citations: [
            {
              id: 1,
              title: "test citation 1",
              body: "test body 1",
              url: "https://www.google.com",
              categoryId: 1
            },
            {
              id: 2,
              title: "test citation 2",
              body: "test body 2",
              url: "https://www.google.com",
              categoryId: 1
            }
          ]
        },
        {
          id: 2,
          name: "test 2",
          parentCategoryId: null,
          citations: [
            {
              id: 3,
              title: "test citation 3",
              body: "test body 3",
              url: "https://www.google.com",
              categoryId: 2
            },
            {
              id: 4,
              title: "test citation 4",
              body: "test body 4",
              url: "https://www.google.com",
              categoryId: 2
            }
          ]
        },
        { id: 3, name: "test 3", parentCategoryId: null, citations: [] },
        { id: 4, name: "test 1", parentCategoryId: null, citations: [] }
      ];

      dispatch(citationSlice.actions.setCategories(result));
    } catch (err) {
      dispatch(citationSlice.actions.setError(err));
    }
  };
};

const stateSelector = state => state.citation;

export const citationSelector = createSelector([stateSelector], state =>
  state !== null ? state.citation || null : {}
);

export const citationsSelector = createSelector([stateSelector], state =>
  state !== null ? state.citations || null : []
);

export const categoriesSelector = createSelector([stateSelector], state =>
  state !== null ? state.categories || null : []
);

export { citationSlice };

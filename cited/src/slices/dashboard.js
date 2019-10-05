import { createSlice, createSelector } from 'redux-starter-kit';

const todosSlice = createSlice({
  slice: 'todos',
  initialState: {
      error: null,
      isLoaded: null,
  },
  reducers: {
    setError(state, action) {
        state.error = action.payload;
    },
    setIsLoaded(state, action) {
        state.isLoaded = action.payload;
    },
  }
});

export const { setIsLoaded } = todosSlice.actions;

export default todosSlice.reducer;
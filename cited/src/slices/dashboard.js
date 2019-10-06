import { createSlice, createSelector } from 'redux-starter-kit';

const todoSlice = createSlice({
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

export const { setIsLoaded } = todoSlice.actions;
const { setError } = todoSlice.actions;

const todosSelector = state => state.todos;

export const isLoadedSelector = createSelector(
  [todosSelector],
  items => (items !== null ? items.isLoaded : null)
)

export { todoSlice };
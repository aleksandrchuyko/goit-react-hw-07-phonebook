import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;

//selectors
export const getFilter = state => state.phonebook.filter;

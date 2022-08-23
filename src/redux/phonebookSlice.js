import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

//persist
const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
};

export const { addContact, removeContact, setFilter } = phonebookSlice.actions;
export const phonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

//selectors
export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

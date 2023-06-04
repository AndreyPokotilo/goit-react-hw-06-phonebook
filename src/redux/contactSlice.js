import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contacts from '../components/Data/contacts.json';

const contactsInitialState = {
  contactsList: contacts,
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsList.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    deleteContacts(state, action) {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['contactsList'],
};

export const { addContact, filterContacts, deleteContacts } =
  contactSlice.actions;
const contactSliceReducer = contactSlice.reducer;

export const persistedReducer = persistReducer(
  persistConfig,
  contactSliceReducer
);

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload.toLowerCase();

      //   state.items = state.items.filter(contact =>
      //     contact.name.toLowerCase().includes(state.filter)
      //   );
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;

// прибрати якщо не потрібно зберігати в локал сторіч
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedContacts = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// https://64d38f5967b2662bf3dc6c98.mockapi.io/contacts

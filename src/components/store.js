import { configureStore, createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
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

      state.items = state.items.filter(contact =>
        contact.name.toLowerCase().includes(state.filter)
      );
    },
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;

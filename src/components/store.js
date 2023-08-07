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
      state.filter = action.payload;
      state.items = state.items.filter(contact =>
        contact.name.includes(state.filter)
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

// const state = {
//   contacts: [],
//   filter: '',
// };

// const sliceNewContact = createSlice({
//   name: 'newContact',
//   initialState: {},
//   reducers: {
//     increment(state, action) {
//       state.nameUser = action.payload;
//     },
//   },
// });

// export const store = configureStore({
//   reducer: {
//     Contacts: sliceContacts.reducer,
//     newContact: sliceNewContact.reducer,
//   },
// });

// export const { increment } = sliceNewContact.actions;
// const sliceContacts = createSlice({
//   name: 'Contacts',
//   initialState: [],
//   reducers: {
//     myContacts(state, action) {
//     state.contacts = [ useSelector(newContact.state), ...state],
//     }
//   }
// })

// export const itemsReducer = createReducer([], {
//   [add]: (state, action) => [...state, action.payload],
//   //   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });

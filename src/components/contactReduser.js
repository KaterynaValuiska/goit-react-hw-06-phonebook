import { createReducer } from '@reduxjs/toolkit';
import { createUser, add, remove } from './actions';

const state = {
  contacts: [],
  filter: '',
};
export const contactReduser = createReducer(state, {
  [createUser]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, { ...action.payload }],
  }),
});

export const itemsReducer = createReducer([], {
  [add]: (state, action) => [...state, action.payload],
  //   [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action) => state.filter(item => item.id !== action.payload),
});

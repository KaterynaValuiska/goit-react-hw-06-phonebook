import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedContacts } from './createSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// якщо не потрібно записувати в локал сторіч використовувати це (прибрати все з персістом):
// export const store = configureStore({
//   reducer: {
//     contacts: contactsSlice.reducer,
//   },
// });

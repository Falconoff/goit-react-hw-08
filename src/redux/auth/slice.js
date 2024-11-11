import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser } from './operations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// Скорочуємо код редюсерів, які обробляють pending та rejected екшени всіх операцій
const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder => builder,
  // .addCase(fetchContacts.pending, handlePending)
  // .addCase(fetchContacts.fulfilled, (state, action) => {
  //   state.loading = false;
  //   state.items = action.payload;
  // })
  // .addCase(fetchContacts.rejected, handleRejected)

  // .addCase(addContact.pending, handlePending)
  // .addCase(addContact.fulfilled, (state, action) => {
  //   state.loading = false;
  //   state.error = null;
  //   state.items.push(action.payload);
  // })
  // .addCase(addContact.rejected, handleRejected)

  // .addCase(deleteContact.pending, handlePending)
  // .addCase(deleteContact.fulfilled, (state, action) => {
  //   state.loading = false;
  //   state.error = null;
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload.id
  //   );
  //   state.items.splice(index, 1);
  // })
  // .addCase(deleteContact.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;

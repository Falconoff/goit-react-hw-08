import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

// Скорочуємо код редюсерів, які обробляють pending та rejected екшени всіх операцій
// const handlePending = state => {
//   state.loading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        // state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = { ...action.payload.user };
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = { ...action.payload.user };
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        // state.token = action.payload.token;
        state.user = { ...action.payload };
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }),
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const authInstance = axios.create();

// export const authInstance = axios.create({
//   baseURL: 'https://connections-api.goit.global',
//   headers: {},
// });

// token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzMyNzEwMWM0OTVlZDZlMjVmMzk0OGUiLCJpYXQiOjE3MzEzNTg5Nzd9.4GyOmKQQ4FNfjjokZJ0uxt1CM7TEk-y6p-llvnOrj1w

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('/users/signup', formData);
      console.log('data: ', data);

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('/users/login', formData);
      console.log('data: ', data);

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const { data } = await authInstance.post('/users/logout');

    clearToken();
    console.log('logout in Operations');

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkApi.rejectWithValue('No token provided to refresh user data');
    }

    try {
      setToken(token);
      const { data } = await authInstance.get('/users/current');

      console.log('data: ', data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

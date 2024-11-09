import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
  headers: {},
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    // {"name": "Adrian Cross", "email": "across@mail.com", "password": "examplepwd12345" }
    try {
      const { data } = await authInstance.post('/users/signup', formData);
      console.log('data: ', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (newContact, thunkAPI) => {
    try {
      // const response = await axios.post('/contacts', newContact);
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (contactId, thunkAPI) => {
    try {
      // const response = await axios.delete(`/contacts/${contactId}`);
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (newContact, thunkAPI) => {
    try {
      // const response = await axios.post('/contacts', newContact);
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

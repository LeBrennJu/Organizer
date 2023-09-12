// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { setLoginForm } from './authActions';

interface AuthState {
  loginForm: boolean;
}

const initialState: AuthState = {
  loginForm: false, // Vous pouvez initialiser LoginForm à false ou true selon vos besoins initiaux.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLoginForm, (state, action) => {
      state.loginForm = action.payload;
    });
  },
});

export const selectLoginForm = (state: { auth: AuthState }) => state.auth.loginForm;

export default authSlice.reducer;

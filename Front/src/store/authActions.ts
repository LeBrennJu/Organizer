
// authActions.ts
import { createAction } from '@reduxjs/toolkit';

// Action pour définir la valeur de LoginForm
export const setLoginForm = createAction<boolean>('auth/setLoginForm');
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index.ts';

export interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  }
})

export const selectTheme = (state: RootState) => state.theme.theme

export const { toggleTheme} = themeSlice.actions;

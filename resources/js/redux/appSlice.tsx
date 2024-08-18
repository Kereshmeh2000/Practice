import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-hot-toast'

const initialState = {
    loading: false,
    error: null,
  }
  
  export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:  {
        startLoading: (state) => {
            state.loading = true;
            state.error = null; 
        },
        stopLoading: (state) => {
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
})

export const { startLoading, stopLoading, setError, clearError } = appSlice.actions;

export const selectAppState = (state) => state.app;

export default appSlice.reducer;
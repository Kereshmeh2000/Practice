import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//User Login
export const userLogin = createAsyncThunk (
    'user/login',
    async(userInfo: {email: string, password: string}, thunkAPI) => {
        try{
            const response = await axios.post ('user/login', userInfo);
            return response.data
        }
        catch (error: any){
            const errorMessage = error.response?.data?.message || 'An error occurred';
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

//User Register
export const userRegister = createAsyncThunk (
    'user/register',
    async(userInfo: {email: string, password: string}, thunkAPI) => {
        try{
            const response = await axios.post ('user/register', userInfo);
            return response.data
        }
        catch (error: any){
            const errorMessage = error.response?.data?.message || 'An error occurred';
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

//User Logout
export const userLogout = createAsyncThunk (
    'user/logout',
    async(_, thunkAPI) => {
        try{
            const response = await axios.delete ('user/logout');
            return response.data
        }
        catch (error: any){
            const errorMessage = error.response?.data?.message || 'An error occurred';
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
)
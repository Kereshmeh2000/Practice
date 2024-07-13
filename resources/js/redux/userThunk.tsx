import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../utils/axios";

//User Login
export const userLogin = createAsyncThunk (
    'user/login',
    async(userInfo: {email: string, password: string}, thunkAPI) => {
        try{
            const response = await customFetch.post ('login', userInfo);
            return response.data
        }
        catch (error: any){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

//User Register
export const userRegister = createAsyncThunk (
    'user/register',
    async(userInfo: {email: string, password: string}, thunkAPI) => {
        try{
            const response = await customFetch.post ('register', userInfo);
            return response.data
        }
        catch (error: any){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

//User Logout
export const userLogout = createAsyncThunk (
    'user/logout',
    async(_, thunkAPI) => {
        try{
            const response = await customFetch.delete ('logout');
            return response.data
        }
        catch (error: any){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
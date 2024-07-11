import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userLogout, userRegister } from './userThunk'
import {toast} from 'react-hot-toast'

interface UserState {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}


const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers : (builder) => {

    //USER LOGIN

    //Pending
    builder
    .addCase(userLogin.pending, (state) => {
      state.loading = true,
      state.error = null
      toast.loading('Loading...')
    }) 

    //Fulfilled
    builder
    .addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false,
      state.isAuthenticated = true,
      state.user = action.payload,
      toast.dismiss();
      toast.success('Login Successful')
    })

    //Rejected
    builder
    .addCase(userLogin.rejected, (state, action) => {
      state.loading = false,
      toast.dismiss(),
      toast.error(action.payload as string)
    })

    //USER REGISTER
    //Pending
    builder
    .addCase(userRegister.pending, (state) => {
      state.loading = true,
      state.error = null
      toast.loading('Loading...')
    })

    //Fulfilled
    builder
    .addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false,
      state.isAuthenticated = true,
      state.user = action.payload,
      toast.dismiss();
      toast.success('Register Successful')
    })

    //Rejected
    builder
    .addCase(userRegister.rejected, (state, action) => {
      state.loading = false,
      toast.dismiss(),
      toast.error(action.payload as string)
    })

    //USER LOGOUT
    //Pending
    builder
    .addCase(userLogout.pending, (state) => {
      state.loading = true,
      state.error = null
      toast.loading('Loading...')
    })

    //Fulfilled
    builder
    .addCase(userLogout.fulfilled, (state) => {
      state.loading = false,
      state.isAuthenticated = false,
      state.user = null,
      toast.dismiss();
      toast.success('Logout Successful')
    })

    //Rejected
    builder
    .addCase(userLogout.rejected, (state, action) => {
      state.loading = false,
      toast.dismiss(),
      toast.error(action.payload as string)
    })
  }
})

export const { } = userSlice.actions

export default userSlice.reducer
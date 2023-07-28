import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    login: {
    }
  },
  reducers: {
    LoginSession: (state) => {
      state.login = {
        userName: "Kuhandran",
        password:"Kuhandran"
      }
    },
    LogoutSession: (state) => {
      state.login = {
        userName: "",
        password:""
      }
    }
  },
})

export const { LoginSession, LogoutSession } = sessionSlice.actions

export const getUser = (state) => state.session.login

export default sessionSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuth:false,
      authUser:{
        username:"",
        useremail:"",
        token:""
      }
    },
    reducers:{
      updateAuth: (state,action)=>{
        state.isAuth = action.payload.isAuth;
        state.authUser.username = action.payload.authUser.username;
        state.authUser.useremail = action.payload.authUser.useremail;
        state.authUser.token = action.payload.authUser.token;
      }
    }
})

export default authSlice.reducer;
export const {updateAuth} = authSlice.actions;
//import { use } from "react";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { auth } from "../Database/FireBaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
//signUp user
export const signupUser= createAsyncThunk(
    "auth/signupUser",
    async({email,password},thunkAPI)=>{
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredential.user;
    }
);
//for logIn user
export const loginUser=createAsyncThunk(
    "auth/loginUser",
    async({email, password})=>{
        const userData = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userData.user;
    }
);
//for logOut user
export const logOutUser=createAsyncThunk(
    "auth/logOutUser",
    async()=>{
        await signOut(auth);
    }
)
export const listenToAuthChanges = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({
        type: "auth/setUser",
        payload: user
      });
    } else {
      dispatch({
        type: "auth/setUser",
        payload: null
      });
    }
  });
};
const initialState={
    user:null,
    loading:false,
    error:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
      setUser:(state,action)=>{
        state.user = action.payload;
      }
    },
    extraReducers:(bulder)=>{
       bulder.addCase(signupUser.pending,(state)=>{
        state.loading = true;
       })
       .addCase(signupUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
       })
       .addCase(signupUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
       })
       .addCase(loginUser.pending,(state)=>{
        state.loading = true;
       })
       .addCase(loginUser.fulfilled,(state, action)=>{
         state.loading = false;
         state.user = action.payload;
       })
       .addCase(loginUser.rejected, (state,action)=>{
        state.loading = false;
        state.error = action.payload;
       })
       .addCase(logOutUser.fulfilled,(state,action)=>{
        state.user = null;
       })
    }
})
export const authReducer = authSlice.reducer;
export const selectUser = (state)=>state.auth.user;
//import { use } from "react";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { auth } from "../Database/FireBaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const mapUser=(user)=>{
  if(!user) return null;
  return{
    uid:user.uid,
    email:user.email,
    displayName:user.displayName,
    photoURL:user.photoURl
  }
}
//signUp user
export const signupUser= createAsyncThunk(
    "auth/signupUser",
    async({email,password},thunkAPI)=>{
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return mapUser(userCredential.user);
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
        return mapUser(userData.user);
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
    dispatch(authSlice.actions.setUser(mapUser(user)))
  });
};
const initialState={
    user:null,
    loading:true,
    error:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
      setUser:(state,action)=>{
        state.user = action.payload;
        state.loading = false;
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
        state.loading = false;
       })
    }
})
export const authReducer = authSlice.reducer;
export const selectUser = (state)=>state.auth.user;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const fetchAiRespoonse = createAsyncThunk("ai/fetchResponse",async (prompt)=>{
 const res = await fetch(`${import.meta.env.OPENAI_API}/`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({prompt})
 })
 if(!res.ok) throw new Error("Ai request faild");
 const data = await res.json();
 return data.result;
})
const initialState = {
    response:"",
    loading:false,
    error:null,
}
const aiSlice = createSlice({
    name:"ai",
    initialState,
    reducers:{},
    extraReducers:(bulder)=>{
      bulder.addCase(fetchAiRespoonse.pending,(state,action)=>{
        state.loading = true;
      })
      .addCase(fetchAiRespoonse.fulfilled,(state,action)=>{
        state.response = action.payload
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAiRespoonse.rejected,(state, action)=>{
        state.error = action.error.message
        state.loading = false;
      })
    }
})
export const aiReducer = aiSlice.reducer;
import { createSlice  } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
    name: "dialog",
    initialState:{
        isLoginOpen:false,
        isSignUpOpen:false,
    },
    reducers:{
        openLoginDialog:(state,action)=>{
            state.isLoginOpen=true
        },
        openSignUpDialog:(state,action)=>{
            state.isSignUpOpen=true
        },
        closeLoginDialog:(state,action)=>{
            state.isLoginOpen=false
        },
        closeSignUpDialog:(state,action)=>{
            state.isSignUpOpen=false
        },
    }
})
 export const {openLoginDialog,closeLoginDialog,closeSignUpDialog,openSignUpDialog}=dialogSlice.actions;

 export default dialogSlice.reducer;
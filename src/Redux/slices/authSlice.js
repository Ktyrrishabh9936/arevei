import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        user:null,
        isLoading:false,
        error:null,
        jwt:null
}

const authSlice = createSlice({
        name:'auth',
        initialState:initialState,
        reducers:{
                registerRequest:(state)=> {return({...state,isLoading:true,error:null})},
                registerSuccess:(state)=> {return({...state,isLoading:false,error:null})},
                registerFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                loginRequest:(state)=> {return({...state,isLoading:true,error:null})},
                loginSuccess:(state,action)=> {return({...state,isLoading:false,error:null,jwt:action.payload})},
                loginFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                getuserRequest:(state)=> {return({...state,isLoading:true,error:null})},
                getuserSuccess:(state,action)=> {return({...state,isLoading:false,error:null,user:action.payload})},
                getuserFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                logout:()=> {
                        localStorage.removeItem('jwt');
                        
                        return initialState;
                },
        },
})
export default authSlice.reducer;
export const {registerRequest,registerFailure,registerSuccess,loginFailure,loginRequest,loginSuccess,logout,getuserFailure,getuserRequest,getuserSuccess} = authSlice.actions;
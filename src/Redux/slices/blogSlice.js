import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        myblog:null,
        blogpage:1,
        totalblogs:null,
        blogs:[],
        blog:null,
        isLoading:false,
        error:null,
}

const blogSlice = createSlice({
        name:'blog',
        initialState:initialState,
        reducers:{
                createBlogRequest:(state)=> {return({...state,isLoading:true,error:null})},
                createBlogSuccess:(state)=> {return({...state,isLoading:false,error:null})},
                createBlogFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                getmyBlogRequest:(state)=> {return({...state,isLoading:true,error:null})},
                getmyBlogSuccess:(state,action)=> {return({...state,isLoading:false,myblog:action.payload,error:null})},
                getmyBlogFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                findBlogRequest:(state)=> {return({...state,isLoading:true,error:null})},
                findBlogSuccess:(state,action)=> {return({...state,isLoading:false,blog:action.payload,error:null})},
                findBlogFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                latestBlogRequest:(state)=> {return({...state,isLoading:true,error:null})},
                latestBlogSuccess:(state,action)=> {return({...state,isLoading:false,blogs:[...state.blogs , ...action.payload.latestBlog],blogpage:state.blogpage+1,totalBlogs:action.payload.total,error:null})},
                latestBlogFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                // loginRequest:(state)=> {return({...state,isLoading:true,error:null})},
                // loginSuccess:(state,action)=> {return({...state,isLoading:false,error:null,jwt:action.payload})},
                // loginFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                // getuserRequest:(state)=> {return({...state,isLoading:true,error:null})},
                // getuserSuccess:(state,action)=> {return({...state,isLoading:false,error:null,user:action.payload})},
                // getuserFailure:(state,action)=> {return({...state,isLoading:false,error:action.payload})},
                // logout:()=> {
                //         localStorage.removeItem('jwt');
                        
                //         return initialState;
                // },
        },
})
export default blogSlice.reducer;
export const {createBlogRequest,createBlogSuccess,createBlogFailure,getmyBlogRequest,getmyBlogSuccess,getmyBlogFailure,findBlogRequest,findBlogSuccess,findBlogFailure,latestBlogRequest,latestBlogSuccess,latestBlogFailure} = blogSlice.actions;
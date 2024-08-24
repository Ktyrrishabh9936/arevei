import {createBlogRequest,createBlogSuccess,createBlogFailure,getmyBlogRequest,getmyBlogSuccess,getmyBlogFailure, findBlogRequest, findBlogSuccess, findBlogFailure} from "../slices/blogSlice";
import api from "../baseapi"
import axios from "axios";

const createBlog=(data,showAlert)=>async(dispatch)=>{
        dispatch(createBlogRequest());
        try {
                const resp = await api.post('/blog/createBlog',data);
                const blog = resp.data;
                console.log(blog)
                showAlert();
                dispatch(createBlogSuccess())
        } catch (error) {
                console.log(error)
                dispatch(createBlogFailure(error.message))
        }
}
const getMyBlogs=()=>async(dispatch)=>{
        dispatch(getmyBlogRequest());
        try {
                const resp = await api.get('/blog/getMyBlogs');
                const blog = resp.data;
                console.log(blog)
                dispatch(getmyBlogSuccess(blog))
        } catch (error) {
                console.log(error)
                dispatch(getmyBlogFailure(error.message))
        }
}
const findBlogs=(id)=>async(dispatch)=>{
        dispatch(findBlogRequest());
        try {
                const resp = await api.get(`/blog/${id}`);
                const blog = resp.data;
                console.log(blog)
                dispatch(findBlogSuccess(blog))
        } catch (error) {
                console.log(error)
                dispatch(findBlogFailure(error.message))
        }
}
export default {
        createBlog,getMyBlogs,findBlogs
}
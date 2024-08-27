import {createBlogRequest,createBlogSuccess,createBlogFailure,getmyBlogRequest,getmyBlogSuccess,getmyBlogFailure, findBlogRequest, findBlogSuccess, findBlogFailure,latestBlogRequest,latestBlogSuccess,latestBlogFailure} from "../slices/blogSlice";
import api from "../baseapi"


const createBlog=(data,showAlert,errorAlert)=>async(dispatch)=>{
        
        dispatch(createBlogRequest());
        try {
                const resp = await api.post('/blog/createBlog',data);
                const blog = resp.data;
                console.log(blog)
                showAlert();
                dispatch(createBlogSuccess())
        } catch (error) {
                console.log(error)
                errorAlert();
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
                const resp = await api.get(`/blog/blogId/${id}`);
                const blog = resp.data;
                console.log(blog)
                dispatch(findBlogSuccess(blog))
        } catch (error) {
                console.log(error)
                dispatch(findBlogFailure(error.message))
        }
}
const fetchBlogs=(page)=>async(dispatch)=>{
        dispatch(latestBlogRequest());
        try {
                const resp = await api.get("/blog/all",{
                        params: { page, limit: 10 } // Fetch 10 products per page
                });
                const blogs = resp.data;
                console.log(blogs)
                dispatch(latestBlogSuccess(blogs))
        } catch (error) {
                console.log(error)
                dispatch(latestBlogFailure(error.message))
        }
}
export default {
        createBlog,getMyBlogs,findBlogs,fetchBlogs
}
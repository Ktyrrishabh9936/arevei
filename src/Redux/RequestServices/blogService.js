import {createBlogRequest,createBlogSuccess,createBlogFailure} from "../slices/blogSlice";
import api from "../baseapi"

const createBlog=(formdata)=>async(dispatch)=>{
        dispatch(createBlogRequest());
        try {
                const resp = await api.post('/blog/createBlog',formdata);
                const blog = resp.data;
                console.log(blog)
                dispatch(createBlogSuccess())
        } catch (error) {
                console.log(error)
                dispatch(createBlogFailure(error.message))
        }
}
export default {
        createBlog
}
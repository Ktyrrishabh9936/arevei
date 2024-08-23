import {createBlogRequest,createBlogSuccess,createBlogFailure} from "../slices/blogSlice";
import api from "../baseapi"

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
export default {
        createBlog
}
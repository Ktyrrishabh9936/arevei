import { getuserFailure, getuserRequest, getuserSuccess, loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "../slices/authSlice";
import api from "../baseapi"
import axios from "axios";

const Register=(formdata)=>async(dispatch)=>{
        dispatch(registerRequest());
        try {
                const resp = await api.post('/auth/signup',formdata.RegisterData);
                const user = resp.data;
                console.log(user)
                formdata.navigate('/login')
                dispatch(registerSuccess())
        } catch (error) {
                console.log(error)
                dispatch(registerFailure(error.message))
        }
}
const Login=(formdata)=>async(dispatch)=>{
        dispatch(loginRequest());
        try {
                const resp = await api.post('/auth/signin',formdata.Login);
                const user = resp.data;
                console.log(user);
                if(user.jwt){
                        dispatch(loginSuccess(user.jwt));
                                localStorage.setItem('jwt',user.jwt);
                                formdata.navigate('/')
                }
        } catch (error) {
                console.log(error)
                dispatch(loginFailure(error.message));
        }
}
const getUser=()=>async(dispatch)=>{
        dispatch(getuserRequest());
        try {
                const resp = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/profile`,{headers:{
                        'authorization':`Bearer ${localStorage.getItem('jwt')}`,
                
                }});
                const user = resp.data;
                console.log(user)
                dispatch(getuserSuccess(user))
        } catch (error) {
                console.log(error)
                dispatch(getuserFailure(error.message))
        }
}
export default {
        Register,
        Login,
        getUser
}
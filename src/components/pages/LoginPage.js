
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../customReactComponent/CustomInput';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import authService from '../../Redux/RequestServices/authService';

export default function LogInPage() {
        const theme = 'rgba(86,206,226,1)';   
        const [Login,setLogin] = useState({email:'',password:""});
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const handleChange=(e)=>{
                setLogin({...Login,[e.target.name]:e.target.value});
        }
        const handleLogin = async(e)=>{
                e.preventDefault();
                dispatch(authService.Login({Login,navigate}));
                
        }
  return (
        <div className="flex  justify-center items-center min-h-[100vh]  text-[#fff] pt-2" style={{backgroundColor:'rgb(3,3,3)'}}>
    <div className='relative  w-[95%]  md:w-[80%]  rounded-lg text-clamp-p '  >
        <div className=" w-full   mx-auto flex max-[500px]:flex-col-reverse dark:bg-slate-50">
                <div className='relative sm:static max-[500px]:w-full w-[60%]   before:bg-cover before:bg-blend-darken before:bg-no-repeat before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full  content-[""]  flex justify-center items-center'  style={{backgroundColor:'#4242'}}>
                <div className='min-w-[230px] max-w-90  w-[80%] lg:w-[60%] py-6 '>
                <h1 className=' font-ChakraPetch text-[clamp(1.2rem,1.5vw,1.7rem)] font-bold text-center  mb-3'>Login to <span  className='text-[rgba(155,225,63,1)]'>Arevei</span> </h1>
                        <form >
                        <CustomInput className='bg-transparent' label='Email' type='email' name='email' theme={theme} value={Login.email} onChange={handleChange}/>
                        <CustomInput className='bg-transparent' label='Password' name='password' type='password' theme={theme} value={Login.password} onChange={handleChange}/>
                        <button type='submit' onClick={handleLogin} className='p-3 mt-2 text-center text-black w-full uppercase' style={{backgroundColor:theme}}>Login</button>
                        </form>
                        <div className="">
                                 <h3 className=' text-clamp-h5 text-center my-2 font-Poppins'>Sign In With </h3>
                                <p className="flex w-full gap-1">
                                        <strong className='p-2 flex justify-center items-center gap-3  border-2 w-full text-center '  style={{backgroundColor:'#42424242'}}><AiFillGoogleCircle style={{color:'rgba(155,225,63,1)',fontSize:'25px'}}/> Google</strong>
                                        <strong className='p-2 flex justify-center items-center gap-3 border-2 w-full text-center ' style={{backgroundColor:'#42424242'}}><FaFacebook style={{color:'rgba(155,225,63,1)',fontSize:'23px'}}/> Facebook</strong>
                                </p>
                        </div>
                        <div className='py-3 text-center whitespace-pre-line'><p className='whitespace-nowrap'>Don't have any account </p>
                     <Link to='/register'>  <p  className=' whitespace-nowrap' style={{color:theme}}>Create new Account</p></Link>
                        </div>
                </div>
                </div>
                <div className='max-[500px]:w-full w-[40%] flex justify-center items-center bg-[rgba(155,225,63,1)]'   >
                        
                       <p className="w-[90%] lg:w-[80%] max-[500px]:w-[30%] py-3">
                        <img src="img/ArevieLogo.png" alt="" />
                        </p>
                </div>
        </div>
    </div>
    </div>
  )
}

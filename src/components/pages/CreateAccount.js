import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch } from 'react-redux';
import authService from '../../Redux/RequestServices/authService';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const CustomTabs = styled(Tabs)({
  backgroundColor:'#424242',
  '& .MuiTabs-indicator': {
    backgroundColor: 'white',
  },
});

const CustomTab = styled(Tab)({
  color:'rgb(130,130,130)',width:'50%',fontSize:'1.3rem',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  transition:'background-color 0.3s ease-in',
  '&.Mui-selected': {
    color: 'white',
    backgroundColor:'rgb(155,225,63)'
  },
});
const InputStyle ={style:{ backgroundColor: 'white', borderRadius: '8px'}}
const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [RegisterData,setRegisterData] = useState({firstName:'',lastName:"",email:"",password:""});
  const [Login,setLogin] = useState({email:'',password:""});
  const handleLoginChange=(e)=>{
          setLogin({...Login,[e.target.name]:e.target.value});
  }
  const handleLogin = async(e)=>{
          e.preventDefault();
          dispatch(authService.Login({Login,navigate}));       
  }
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
    const handleSignupChange=(e)=>{
        setRegisterData({...RegisterData,[e.target.name]:e.target.value});
    }
    const handleSignup = async(e)=>{
        e.preventDefault();
        dispatch(authService.Register({RegisterData,navigate}));
}
  return (
  
      <Box className=" flex items-center justify-center bg-[rgb(19,19,19)] w-[24rem] sm:w-[28rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem] text-white rounded-[2rem]  text-center  flex-col overflow-hidden" sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',boxShadow: 24,padding: '0px',
}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',width:'100%'}}>
        <CustomTabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
          <CustomTab  label="SIGN UP" {...a11yProps(0)} />
          <CustomTab  label="SIGN IN" {...a11yProps(1)} />
        </CustomTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Box className="py-3 mx-auto w-[85%]  shadow-lg   space-y-5 ">

<h1 className="font-bold text-[clamp(1.7rem,2.4vw,2.5rem)]  text-center leading-7 lg:leading-none">
Create to account to start writing.
</h1>
<Typography variant="body1" className="text-[rgb(130,130,130)] mb-8">
  At Arevei, we prioritize clarity, providing straightforward pricing with no hidden fees or surprises.
</Typography>

<Box component="form" noValidate autoComplete="off" className="space-y-4 mb-6 max-w-sm mx-auto">
  <Box className='flex gap-3' >
    <TextField  fullWidth onChange={handleSignupChange} name='firstName' value={RegisterData.firstName} variant="outlined" placeholder="First Name" InputProps={InputStyle}
  />
  <TextField  fullWidth onChange={handleSignupChange} name='lastName' value={RegisterData.lastName} variant="outlined" placeholder="Last Name" InputProps={InputStyle}
  />
  </Box>
  <TextField fullWidth onChange={handleSignupChange} name='email'  type='email'  value={RegisterData.email}
variant="outlined" placeholder="Email" InputProps={InputStyle}
  />
  <TextField fullWidth onChange={handleSignupChange} name='password' value={RegisterData.password}
 variant="outlined" placeholder="Password" type="password" InputProps={InputStyle}
  />

  <Button fullWidth style={{backgroundColor:'rgba(86,206,226,1)', color:'white',paddingTop:'0.7rem',paddingBottom:'0.7rem'}} onClick={handleSignup}>Sign Up</Button>
</Box>

<Typography variant="body2" className="text-[rgb(130,130,130)] mb-4">
  Already have an account? <span onClick={()=>setValue(1)} className="text-[rgb(155,225,63)] cursor-pointer">Sign in</span>
</Typography>

<Typography variant="body2" className="text-[rgb(130,130,130)]">
  Click “Sign up” to agree to Arevei’s <Link href="#" className="text-[rgb(155,225,63)]">Terms of Service</Link> and acknowledge that Arevei’s <Link href="#" className="text-[rgb(155,225,63)]">Privacy Policy</Link> applies to you.
</Typography>
</Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box className="py-3 mx-auto w-[85%]  shadow-lg   space-y-5">

<h1 className="font-bold text-[clamp(1.7rem,2.4vw,2.5rem)]  text-center leading-7 lg:leading-none">
  Login an account to start writing.
</h1>
<Typography variant="body1" className="text-[rgb(130,130,130)] mb-8">
  At Arevei, we prioritize clarity, providing straightforward pricing with no hidden fees or surprises.
</Typography>

<Box component="form" noValidate autoComplete="off" className="space-y-4 mb-6 max-w-sm mx-auto">
  
<TextField fullWidth onChange={handleLoginChange} name='email' value={Login.email}
variant="outlined" placeholder="Email" type='email' InputProps={InputStyle}
  />
  <TextField  fullWidth onChange={handleLoginChange} name='password' value={Login.password}
 variant="outlined" placeholder="Password" type="password" InputProps={InputStyle}
  />
<Button fullWidth onClick={handleLogin} style={{backgroundColor:'rgba(86,206,226,1)', color:'white',paddingTop:'0.7rem',paddingBottom:'0.7rem'}}>Sign In</Button>
</Box>

<Typography variant="body2" className="text-[rgb(130,130,130)] mb-4">
  Don't have any account? <span  className="text-[rgb(155,225,63)] cursor-pointer" onClick={()=>setValue(0)}>Sign Up</span>
</Typography>

<Typography variant="body2" className="text-[rgb(130,130,130)]">
  Click “Sign up” to agree to Arevei’s <Link href="#" className="text-[rgb(155,225,63)]">Terms of Service</Link> and acknowledge that Arevei’s <Link href="#" className="text-[rgb(155,225,63)]">Privacy Policy</Link> applies to you.
</Typography>
</Box>
      </CustomTabPanel>

      
      </Box>

  );
};
const CreateAccountOverlay = ({ open, handleClose }) => {
  return(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CreateAccount/>
    </Modal>
  )
}
const CreateAccountPage = ({ open}) => {
  return(
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CreateAccount/>
    </Modal>
  )
}

export default CreateAccount;
export  {CreateAccountOverlay,CreateAccountPage};

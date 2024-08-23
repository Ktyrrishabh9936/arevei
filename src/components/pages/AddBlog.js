
import React, {useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import {Button,Typography,Box, Stepper, Step, StepLabel,} from '@mui/material';
import BlogNavigation from '../BlogViewPage/Navigation';
import BlogPost from '../BlogViewPage/BlogPost';
import { useDispatch, useSelector } from 'react-redux';
import blogService from '../../Redux/RequestServices/blogService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loader from 'react-spinner-loader';
import CustomStepper from '../ProjectPage/projectStatus';
import CreateBlogNavbar from '../BlogViewPage/createBlogNavbar';

function getSteps() {
  return ['Title', 'Content', 'Review & Publish'];
}

function getStepContent(step,editor,handleBack,handleNext, formData,content,setContent,config, handleChange,handlePublish,File,setFile,loader) {
  switch (step) {
    case 0:
      return (
        <div className='flex flex-col items-center justify-center  space-y-6'>
        <h1 className="text-3xl ">Enter the Headline</h1>
        <input
          type="text"
          className="w-[65%] rounded-full px-7 py-3  bg-[rgb(11,11,11)] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgba(155,225,63)]"
          name='Heading'
          value={formData.Heading}
          onChange={handleChange}
        />
        <h1 className="text-xl ">Enter the Sub Headling</h1>
        <input
          type="text"
          className="w-[65%] rounded-full px-7 py-3  bg-[rgb(11,11,11)] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgba(155,225,63)]"
          name='SubHeading'
          value={formData.SubHeading}
          onChange={handleChange}
        />
        <button className="px-4 py-2 bg-[rgba(155,225,63)] text-black font-semibold rounded hover:bg-green-600" onClick={handleNext}>
          Next
        </button>
        {/* <p className="mt-2 text-sm text-gray-400">Save Idea</p> */}
        </div>
      );
    case 1:
        
      return (
        <div className=' flex flex-col gap-y-5 justify-center  items-center'>
         <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
                        config={config}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent =>{}}
		/>
               <div className="flex gap-5">
               <button className="px-4 py-2 text-[rgba(155,225,63)] border-2 border-[rgba(155,225,63)] bg-black font-semibold rounded hover:text-white" onClick={handleBack}>
          Back
        </button>
        <button className="px-4 py-2 bg-[rgba(155,225,63)] text-black font-semibold rounded hover:bg-green-600" onClick={handleNext}>
          Next
        </button>
               </div>
        </div>
      );
    case 2:
      return (
        <div className=' flex flex-col gap-y-5 justify-center  items-center '>
        <Typography>
          <h1 className=' text-center text-3xl '>Preview your Post</h1>
         <BlogPost head={formData} content={content} File={File} setFile={setFile}/>
      <Loader show = {loader} type="body"/>

        </Typography>
        <div className="flex gap-5">
        <button className="px-4 py-2 text-[rgba(155,225,63)] border-2 border-[rgba(155,225,63)] bg-black font-semibold rounded hover:text-white" onClick={handleBack}>
   Back
 </button>
 <button className="px-4 py-2 bg-[rgba(155,225,63)] text-black font-semibold rounded hover:bg-green-600" onClick={handlePublish}>
   Publish
 </button>
        </div>
        
        </div>
      );
    default:
      return 'Unknown step';
  }
}

export default function AddBlog() {
  const [activeStep, setActiveStep] = useState(0);
  const editor = useRef(null);
  const dispatch = useDispatch();
  const {blogReducer} = useSelector(store=>store)
  const navigate = useNavigate();
  const [File, setFile] = useState(null);
  const [content, setContent] = useState('');
  const [formData, setFormData] = useState({
    Heading: '',
    SubHeading: '',
  });
  const handlePublish=()=>{
    const data = new FormData();
    data.append('coverImage',File);
    data.append('headline',formData.Heading);
    data.append('subHeadline',formData.SubHeading);
    data.append('content',content);
    // {coverImage:File,headline:formData.Heading,subHeadline:formData.SubHeading,content:content}
    dispatch(blogService.createBlog(data,showAlert));
    // handleReset();
  }
  const config = {
                        
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
                        style:{
                                backgroundColor:'black',
                                color:'#f0f0f0'
                        },
                        toolbar:{
                                style:{
                                        backgroundColor:'#4a90e2',
                                }
                        },
                        height:400,
			placeholder: 'Write Blog Content here....'
		}
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
 const handleReset = () => {
    setActiveStep(0);
    setFormData({
        Heading: '',
        SubHeading: '',
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Your action was successful.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'rounded-lg bg-gray-800 text-white', // Custom classes for styling
        title: 'text-lime-500',
        confirmButton: 'bg-lime-500 hover:bg-lime-400 text-black',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
    });
  };

  return (
    <div className='bg-black min-h-screen'>
        <CreateBlogNavbar/>
        <div className=' min-h-[80vh]  flex justify-center items-center'>
        <div className="  text-white py-6 my-auto w-full">
                <Box sx={{ width: '100%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
      {/* <Stepper activeStep={activeStep} sx={{width:'80%'}} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      <CustomStepper steps={steps} activeStep={activeStep}/>
      <Box sx={{ mt: 2, mb: 1,width:'100%' }}>
        {getStepContent(activeStep,editor,handleBack,handleNext,formData,content,setContent,config, handleChange,handlePublish,File,setFile,blogReducer.isLoading)}
      </Box>
      {activeStep === steps.length && (
        <Box sx={{ mt: 2 }}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1 }}>
            Reset
          </Button>
        </Box>
      )}
    </Box>
        
      </div>
    
    </div>
    </div>
  );
}

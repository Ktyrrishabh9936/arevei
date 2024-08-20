
import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Box,
} from '@mui/material';
import BlogNavigation from '../BlogPage/Navigation';
import Blogpage from './Blogpage';
import BlogPost from '../BlogPage/BlogPost';

function getSteps() {
  return ['Personal Information', 'Contact Details', 'Review & Submit'];
}

function getStepContent(step,editor,handleBack,handleNext, formData,content,setContent,config, handleChange) {
  switch (step) {
    case 0:
      return (
        <div className='flex flex-col items-center justify-center min-h-screen space-y-6'>
        <h1 className="text-3xl ">Enter the Headline</h1>
        <input
          type="text"
          className="w-[65%] rounded-full px-7 py-3  bg-[rgb(11,11,11)] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgba(155,225,63)]"
          name='Heading'
          value={formData.Heading}
          onChange={handleChange}
        />
        <button className="px-4 py-2 bg-[rgba(155,225,63)] text-black font-semibold rounded hover:bg-green-600" onClick={handleNext}>
          Next
        </button>
        <p className="mt-2 text-sm text-gray-400">Save Idea</p>
        </div>
      );
    case 1:
        
      return (
        <div className=' min-h-screen flex flex-col gap-y-5 justify-center  items-center'>
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
        <div className='min-h-screen flex flex-col gap-y-5 justify-center  items-center '>
        <Typography>
          <h1 className=' text-center text-3xl '>Preview your Post</h1>
         <BlogPost headline={formData.Heading} content={content}/>
        </Typography>
        <div className="flex gap-5">
        <button className="px-4 py-2 text-[rgba(155,225,63)] border-2 border-[rgba(155,225,63)] bg-black font-semibold rounded hover:text-white" onClick={handleBack}>
   Back
 </button>
 <button className="px-4 py-2 bg-[rgba(155,225,63)] text-black font-semibold rounded hover:bg-green-600" onClick={handleNext}>
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
  const [content, setContent] = useState('');
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    Heading: '',
    SubHeading: '',
  });
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
                        height:600,
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

  return (
        <>
        <BlogNavigation/>
        <div className="flex flex-col   justify-center min-h-screen bg-black text-white">
                <Box sx={{ width: '100%' }}>
      {/* <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      <Box sx={{ mt: 2, mb: 1 }}>
        {getStepContent(activeStep,editor,handleBack,handleNext,formData,content,setContent,config, handleChange)}
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
    
    </>
  );
}

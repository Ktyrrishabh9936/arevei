import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  padding: '30px',
};

const Button = styled('button')({
  backgroundColor: 'rgba(155,225,63,1)',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
});

const CreateAccount = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className=" flex items-center justify-center bg-[rgb(19,19,19)] w-[24rem] sm:w-[28rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem] text-white rounded-[2rem]  text-center " sx={style}>
        <Box className="py-10 w-[80%]  shadow-lg   space-y-10">
          <h1 className="font-bold text-[clamp(2.3rem,2.7vw,3rem)] leading-[3rem] text-center">
            Create an account to start writing.
          </h1>
          <Typography variant="body1" className="text-[rgb(130,130,130)] mb-8">
            At Arevei, we prioritize clarity, providing straightforward pricing with no hidden fees or surprises.
          </Typography>
  
          <Box component="form" noValidate autoComplete="off" className="space-y-4 mb-6 max-w-sm mx-auto">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email"
              InputProps={{
                style: { backgroundColor: 'white', borderRadius: '8px' }
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Password"
              type="password"
              InputProps={{
                style: { backgroundColor: 'white', borderRadius: '8px' }
              }}
            />
          </Box>
  
          <Typography variant="body2" className="text-[rgb(130,130,130)] mb-4">
            Already have an account? <Link href="#" className="text-[rgb(155,225,63)]">Sign in</Link>
          </Typography>
  
          <Typography variant="body2" className="text-[rgb(130,130,130)]">
            Click “Sign up” to agree to Arevei’s <Link href="#" className="text-[rgb(155,225,63)]">Terms of Service</Link> and acknowledge that Arevei’s <Link href="#" className="text-[rgb(155,225,63)]">Privacy Policy</Link> applies to you.
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateAccount;

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
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

const LoginModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form className="flex flex-col">
          <input type="email" placeholder="Email" className="p-2 mb-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 mb-2 border rounded" />
          <Button type="submit">Login</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;

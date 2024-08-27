// ProtectedRoute.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import  CreateAccount, { CreateAccountOverlay, CreateAccountPage } from '../pages/CreateAccount';
// Function to check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return false; // No token present
  }

  try {
    const { exp } = jwtDecode(token); // Decode token to extract expiration time
    if (exp * 1000 < Date.now()) {
      // Token is expired
      localStorage.removeItem('token'); // Optionally remove the expired token
      return false;
    }
    return true;
  } catch (error) {
    console.error('Token decode error:', error);
    return false; // Error decoding token indicates invalid token
  }
};

// export const ProtectedRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// };
export const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <div style={{backgroundColor:'black',minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}><CreateAccountPage open={true} /></div> ;
};

export function ProtectWriteButton({children,onClick,...rest}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (isAuthenticated()) {
      onClick();
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={handleButtonClick} {...rest}>
        {children}
      </button>
      <CreateAccountOverlay open={modalOpen} handleClose={handleCloseModal} />
    </>
  );
}
export default {ProtectedRoute,ProtectWriteButton};

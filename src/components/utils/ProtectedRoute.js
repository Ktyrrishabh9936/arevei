// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
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

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

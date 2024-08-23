import React from 'react'
import { Box, TextField, Button, Link, Typography } from '@mui/material';
export default function createAccount() {
  return (
        <Box className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <Box className="bg-gray-900 p-10 rounded-lg shadow-lg max-w-md w-full">
          <Typography variant="h4" component="h1" className="font-bold mb-6">
            Create an account to start writing.
          </Typography>
          <Typography variant="body1" className="text-gray-400 mb-8">
            At Arevei, we prioritize clarity, providing straightforward pricing with no hidden fees or surprises.
          </Typography>
  
          <Box component="form" noValidate autoComplete="off" className="space-y-4 mb-6">
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
  
          <Typography variant="body2" className="text-gray-400 mb-4">
            Already have an account? <Link href="#" className="text-green-500">Sign in</Link>
          </Typography>
  
          <Typography variant="body2" className="text-gray-400">
            Click “Sign up” to agree to Arevei’s <Link href="#" className="text-green-500">Terms of Service</Link> and acknowledge that Arevei’s <Link href="#" className="text-green-500">Privacy Policy</Link> applies to you.
          </Typography>
        </Box>
      </Box>
  )
}

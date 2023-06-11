

// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import Headder from './Headder';


// const defaultTheme = createTheme();

// function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <>
//     {/* <div>
//         <Headder/>
//     </div> */}
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             {/* <LockOutlinedIcon /> 
//           </Avatar> */}

//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
            //   <Grid item xs={12} sm={6}>
            //     <TextField
            //       required
            //       fullWidth
            //       id="lastName"
            //       label="Last Name"
            //       name="lastName"
            //       autoComplete="family-name"
            //     />
            //   </Grid>
            //   <Grid item xs={12}>
            //     <TextField
            //       required
            //       fullWidth
            //       id="email"
            //       label="Email Address"
            //       name="email"
            //       autoComplete="email"
            //     />
            //   </Grid>
            //   <Grid item xs={12}>
            //     <TextField
            //       required
            //       fullWidth
            //       name="password"
            //       label="Password"
            //       type="password"
            //       id="password"
            //       autoComplete="new-password"
            //     />
            //   </Grid>
            //   <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href='http://localhost:3000/signin' variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//     </>
//   );
// }export default SignUp



import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Process the signup data and generate OTP
    // Save the OTP and proceed to OTP verification
    setIsSignedUp(true);
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    // Verify the entered OTP
    // If OTP is correct, proceed to login page
    setIsSignedUp(false);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      {isSignedUp ? (
        <Box component="div">
          <Typography variant="h5">OTP Verification</Typography>
          <form onSubmit={handleOtpVerification}>
            <TextField
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              label="Enter OTP"
              fullWidth
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Verify
            </Button>
          </form>
        </Box>
      ) : (
        <Box component="div">
          
          <form onSubmit={handleSignup}>
          <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
              <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Sign Up
            </Button>


            <Grid container justifyContent="flex-end">
               <Grid item>
                 <Link href='http://localhost:3000/signin' variant="body2">
                   Already have an account? Sign in
                </Link>
               </Grid>
             </Grid>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default SignUp;




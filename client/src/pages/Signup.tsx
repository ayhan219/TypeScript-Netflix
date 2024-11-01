import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


type Props = {}

const Signup = (props: Props) => {
  return (
    <div 
      className="flex items-center justify-center w-full h-screen bg-center cover" 
      style={{
        backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fit/w_828,h_466,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')`,
        backgroundSize: 'cover'
      }}
    >
      {/* Opak arka plan kutusu */}
      <div className="w-[90%] max-w-md p-8 bg-black bg-opacity-70 rounded-md">
        <div className="w-full mb-6 text-4xl font-bold text-center text-white">
          <h2>Sign Up</h2>
        </div>
        
        {/* Form alanı */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { mb: 3, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            id="username" 
            label="Username" 
            variant="filled" 
            InputLabelProps={{ style: { color: '#e5e5e5' } }}
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField 
            id="email" 
            label="Email" 
            variant="filled" 
            InputLabelProps={{ style: { color: '#e5e5e5' } }}
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField 
            id="password" 
            label="Password" 
            type="password"
            variant="filled" 
            InputLabelProps={{ style: { color: '#e5e5e5' } }}
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <Button 
            variant="contained" 
            color="error" 
            style={{ width: '100%', padding: '12px 0', marginTop: '8px' }}
          >
            Sign Up
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default Signup;

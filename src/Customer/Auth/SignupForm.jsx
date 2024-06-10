import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function SignupForm() {
    const Navigate=useNavigate();
  
  //  const jwt=localStorage.getItem("jwt")
   


    const handleSubmit=async(event)=>{
        event.preventDefault()

        const data=new FormData(event.currentTarget);

        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get('email'),
            password:data.get("password")
            
        }
        console.log(userData);
        try {
            const response = await axios.post('http://localhost:5400/auth/signup', userData);

            console.log("User signed up successfulaly:", response.data);
    alert("success");
    localStorage.getItem('token')
    console.log("token");
            Navigate('/');
            
        } catch (error) {
            alert("error",error)
            console.error("Error occurred during signup:", error);
            // Handle error here, such as displaying an error message to the user
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='FirstName'
                    fullWidth
                    autoComplete='given-name'/>

                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='LastName'
                    fullWidth
                    autoComplete='given-name'/>

                    
                </Grid>
                <Grid item xs={12} >
                    <TextField
                    required
                    id='email'
                    name='email'
                    label='Email'
                    fullWidth
                    autoComplete='email'/>

                    
                </Grid>
                <Grid item xs={12} >
                    <TextField
                    required
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
                    autoComplete='password'/>

                    
                </Grid>
                <Grid item xs={12} >
                    <Button
                    className='bg-[#9155fd] w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{padding:'.8rem 0',bgcolor:'#9155fd'}}>
                        Register
                    </Button>
                    
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex Items-center'>
                <p>
                    if you have already account ?
                </p>
                <Button onClick={()=>Navigate('/login')}className='ml-5 'size='small'>Login</Button>
            </div>
        </div>
    </div>
  )
}

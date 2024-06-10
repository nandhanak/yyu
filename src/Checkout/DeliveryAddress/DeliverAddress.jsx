import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../../AddressCard/AddressCard'

export default function DeliverAddress() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
const address={
    firstName:data.get("firstName"),
    lastName:data.get("lastName"),
    streetAddress:data.get("address"),
    city:data.get("city"),
    state:data.get("state"),
    zipCode: data.get("zipCode"),
    mobile:data.get("mobile")
    
}

        console.log("address", address);
    }
  return (
    <div>
       
        <Grid container spacing={1}item xs={16} >
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <Grid xs={12}lg={5} className='border rounded-e-md shadow-md h-[30.5rem] w-[35rem] overflow-y-scroll'>
                <div className='p-5 py-7 border-b cursor-pointer'>
                  
                    <AddressCard/>
                    <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size="large"variant='contained'>Delivery Here</Button>
                  </div>
               

            </Grid>
        
            <Grid item xs={16}lg={7} spacing={4}marginLeft="8px">
            <Box className="border rounded-s-md shadow-md p-6">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}sm={6}>
                    <TextField
                         required
                         id="firstName"
                         name='firstName'
                         label="First Name"
                         fullWidth
                         autoComplete="given-name" 
                               />

                       
                    </Grid>
                    <Grid item xs={12}sm={6}>
                    <TextField
                         required
                         id="lastName"
                         name='LastName'
                         label="Last Name"
                         fullWidth
                         autoComplete="given-name" 
                               />

                       
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                         required
                         id="address"
                         name='Address'
                         label="Address"
                         fullWidth
                         autoComplete="given-name"
                         multiline
                         rows={4} 
                               />

                       
                    </Grid>
                    <Grid item xs={12}sm={6}>
                    <TextField
                         required
                         id="city"
                         name='city'
                         label="City"
                         fullWidth
                         autoComplete="given-name" 
                               />

                       
                    </Grid>
                    <Grid item xs={12}sm={6}>
                    <TextField
                         required
                         id="State"
                         name='State'
                         label="State/Province/Region"
                         fullWidth
                         autoComplete="given-name" 
                               />

                       
                    </Grid>
                    <Grid item xs={12}sm={6}>
                    <TextField
                         required
                         id="zip"
                         name='zip'
                         label="zip/postal  code"
                         fullWidth
                      autoComplete='shipping postal-code'
                               />

                       
                    </Grid>
                    <Grid item xs={12}sm={6}>
                    <TextField
                         required
                         id="phoneNumber"
                         name='phoneNumber'
                         label="Phone Number"
                         fullWidth
                         autoComplete="given-name" 
                               />

                       
                    </Grid>
                    <Grid item xs={12}sm={6}>
                   <Button sx={{py :1 ,mt:2,bgcolor:"RGB(145 85 253)"}} size="large"variant='contained'type='submit'>
                    Deliver Here
                   </Button>

                       
                    </Grid>
                    
                </Grid>
               </form>


            </Box>

            </Grid>

</div>
             </Grid>
             </div>
           

  )
}


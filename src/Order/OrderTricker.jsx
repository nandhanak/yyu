import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function OrderTricker() {

    const steps=[
        "placed",
        "Order Confimed",
        "Shipped",
        "Out For Delivery",
        "Delivered",
    ]
    const [activeStep, setActiveStep] = useState(0);

  return (
    <div className='w-full'>
<Stepper activeStep={activeStep} alternativeLabel>
{steps.map((label)=> <Step>
    <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
</Step>)}
</Stepper>
    </div>
  )
}

export default OrderTricker
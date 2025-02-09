import React from 'react'
import { Box, Modal, Model, Typography} from '@mui/material'
import SignupForm from './SignupForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
   outline:"none",
    boxShadow: 24,
    p: 4,
  };

function AuthModel({open,handleClose}) {
const location=useLocation();

  return (
    <div>
       
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
{location.pathname==="/login"?<LoginForm/>:<SignupForm/>}

  </Box>
</Modal>
    </div>
  )
}

export default AuthModel;
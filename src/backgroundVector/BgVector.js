import React from 'react'
import { Box, Stack } from '@mui/material';
import { ReactComponent as VectorLogo } from '../svg/Vector.svg';


const BgVector = () => {
  return (
    <Box sx={{height:"205px",backgroundColor:"rgba(83, 47, 130, 1)",overflow:"hidden "}}>
    <Box sx={{float:"right",}}>
    <VectorLogo />
    </Box>
   </Box>  )
}

export default BgVector
import React from 'react'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <Typography variant='h6' sx={{color:'gray', marginTop:'30px', textAlign:'center', padding:'10px', fontSize:{xs:'14px', md:'22px'}}}>
        &copy; 2022 Wandy. Build With Next Js, Material UI, and Redux Toolkit.
    </Typography>
  )
}

export default Footer
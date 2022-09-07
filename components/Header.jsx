import React, {useState} from 'react'
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [togle, setTogle] = useState(false);
  const handleTogle = () => {
    setTogle(!togle);
  };
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid gray', paddingX:{md:'50px', xs:'20px'}, paddingY:'10px', position:'fixed', top:0, left:0, right:0, backgroundColor:'rgba(255, 255, 255, .15)', backdropFilter:'blur(20px)'}}>
        <Typography sx={{fontSize:{xl:'40px', lg:'35px', xs:'20px', ":hover":{color:'aqua'}}}}>
          <Link href={'/'}>NYTimes News</Link>
        </Typography>
        <Box sx={{display: {md:'none'}}} onClick={() => handleTogle()}>
          {!togle? <MenuIcon fontSize='large'/> : <CloseIcon fontSize='large'/>}
        </Box>
          {!togle? null : (
        <Box onClick={() => handleTogle()} sx={{display:{md:'none', xs:'flex'}, gap:3, flexDirection:'column', position:'absolute', top:61, right:0, textAlign:'end', backgroundColor:'rgba(255, 255, 255, .35)', backdropFilter:'blur(20px)', paddingX:'25px', minHeight:'100vh', color:'black', fontWeight:'bold', fontSize:'20px' }}>
            <Typography variant='p' sx={{padding:'2px', ":hover":{color:'aqua'}}}><Link href={'/'}>All Most Popular</Link></Typography>
            <Typography variant='p' sx={{":hover":{color:'aqua'}}}><Link href={'/emailed'}>Emailed</Link></Typography>
            <Typography variant='p' sx={{":hover":{color:'aqua'}}}><Link href={'/shared'}>Shared</Link></Typography>
            <Typography variant='p' sx={{":hover":{color:'aqua'}}}><Link href={'/viewed'}>Viewed</Link></Typography>
        </Box>)}
        <Box sx={{display:{md:'flex', xs:'none'}, gap:3 }}>
            <Typography variant='p' sx={{padding:'2px', ":hover":{color:'aqua'}}}><Link href={'/'}>All Most Popular</Link></Typography>
            <Typography variant='p' sx={{":hover":{color:'aqua'}}}><Link href={'/emailed'}>Emailed</Link></Typography>
            <Typography variant='p' sx={{":hover":{color:'aqua'}}}><Link href={'/shared'}>Shared</Link></Typography>
            <Typography variant='p' sx={{":hover":{color:'aqua'}}}><Link href={'/viewed'}>Viewed</Link></Typography>
        </Box>
    </Box>
  )
}

export default Header
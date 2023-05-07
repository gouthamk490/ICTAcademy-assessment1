import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box>
            <AppBar style={{borderRadius:"30px",boxSizing:'border-box',top:"25px"}}>
                <Toolbar>
                    <Typography sx={{ flexGrow:1}} align='left' style={{textShadow:"4px 3px rgba(100, 5, 100, 0.309)",fontSize:"30px"}}><em>Employee</em></Typography>
                    <Button variant='outlined' color='inherit' style={{boxShadow:"4px 3px rgba(100, 5, 100, 0.309)",borderRadius:"20px"}}><Link to={'/view'} style={{color:"whitesmoke",textDecoration:'none'}}>Home</Link></Button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='outlined' color='inherit' style={{boxShadow:"4px 3px rgba(100, 5, 100, 0.309)",borderRadius:"20px",}} ><Link to={'/form'} style={{color:"whitesmoke",textDecoration:'none'}}>Employee-Form</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar
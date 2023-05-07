import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

const Form = () => {
  return (
    <div style={{ padding: "25px"}} class='form'>
        <Typography variant='h3' style={{color:"whitesmoke",fontFamily:"monospace",textShadow:"4px 3px rgba(100, 5, 100, 0.309)"}}><u>Employee Form</u></Typography>
        <br/><br/>
        <TextField variant='outlined' placeholder='Name' label='Name' style={{boxShadow:"4px 3px rgba(100, 5, 100, 0.309)",borderRadius:"5px"}}></TextField>
        <br/><br/>
        <TextField variant='outlined' placeholder='Designation' label='Designation' style={{boxShadow:"4px 3px rgba(100, 5, 100, 0.309)",borderRadius:"5px"}}></TextField>
        <br/><br/>
        <TextField variant='outlined' placeholder='Location' label='Location' style={{boxShadow:"4px 3px rgba(100, 5, 100, 0.309)",borderRadius:"5px"}}></TextField>
        <br/><br/>
        <TextField variant='outlined' placeholder='Salary' label='Salary' style={{boxShadow:"4px 3px rgba(100, 5, 100, 0.309)",borderRadius:"5px"}}></TextField>
        <br/><br/>
        <Button  variant='outlined' color='error' style={{color:"whitesmoke",fontFamily:"revert-layer",boxShadow:"4px 3px rgba(100, 5, 100, 0.309)",borderRadius:"10px"}}>Submit</Button>
    </div>
  )
}

export default Form
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const View = () => {
    var [users, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setData(users = response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, []);


  return (
    <div style={{ padding: "150px"}} >
    <Typography variant='h2' style={{ color: "whitesmoke", fontFamily: "monospace",textShadow:"4px 3px rgba(100, 5, 100, 0.309)" }}><u>DashBoard</u></Typography>
    <br /><br /><br />
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{ fontFamily: "monospace", color: "whitesmoke", fontSize: "40px",textShadow:"4px 3px rgba(100, 5, 100, 0.309)" }}><em>Id</em></TableCell>
                    <TableCell style={{ fontFamily: "monospace", color: "whitesmoke", fontSize: "40px",textShadow:"4px 3px rgba(100, 5, 100, 0.309)"}}><em>Name</em></TableCell>
                    <TableCell style={{ fontFamily: "monospace", color: "whitesmoke", fontSize: "40px",textShadow:"4px 3px rgba(100, 5, 100, 0.309)" }}><em>E-Mail</em></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((value, index) => {
                    return <TableRow>
                        <TableCell style={{ fontFamily: "monospace", color: "whitesmoke", fontSize: "20px" }}>{value.id}</TableCell>
                        <TableCell style={{ fontFamily: "monospace", color: "whitesmoke", fontSize: "20px" }}>{value.name}</TableCell>
                        <TableCell style={{ fontFamily: "monospace", color: "whitesmoke", fontSize: "20px" }}>{value.email}</TableCell>
                    </TableRow>
                })
                }
            </TableBody>
        </Table>
    </TableContainer>
</div >
  )
}

export default View
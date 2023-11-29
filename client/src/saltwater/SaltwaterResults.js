"use client";  // This is a client component

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function SaltwaterResults( {data, setDisplayResults }){
    return (
        <div>
            <button onClick={() => setDisplayResults(false)}>back</button>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Test</TableCell>
                            <TableCell align="right">Input</TableCell>
                            <TableCell align="right">Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => {
                            if(item.input !== null && item.input !== "NaN"){
                                return(
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.name}
                                        </TableCell>
                                        <TableCell align="right">{item.input}</TableCell>
                                    </TableRow> 
                                )
                            } else {
                                <div>nothing</div>
                            }      
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div> 
    )
}
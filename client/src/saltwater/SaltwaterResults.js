"use client";  // This is a client component

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function SaltwaterResults( {data, setDisplayResults }){
    let count = 0
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Test</TableCell>
                            <TableCell align="right">Input</TableCell>
                            <TableCell align="right">Range</TableCell>
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
                                            {item.name}{item.unit != "" ? ` (${item.unit})` : ""}
                                        </TableCell>
                                        <TableCell align="right">{item.input}</TableCell>
                                        <TableCell align="right">{item.min} - {item.max}</TableCell>
                                        <TableCell align="right">
                                            {item.input >= item.min && item.input <= item.max ? (
                                                <p className='text-[#008000] font-semibold'>GOOD</p>
                                            ) : (
                                                <p className='text-[#FF0000] font-semibold'>BAD</p>
                                            )}
                                        </TableCell>
                                    </TableRow> 
                                )
                            } else {count+=1}      
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {count > 11 ? (<div className='mt-2'>No Data</div>) : (<p></p>)}
            <div className='flex items-center justify-center mb-8'>
                <Button 
                        type="button" 
                        className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-grey-900" variant="contained"
                        onClick={() => setDisplayResults(false)}
                    >
                        Back
                </Button>
            </div>
        </div> 
    )
}
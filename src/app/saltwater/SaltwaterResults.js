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


export default function SaltwaterResults( {data, setDisplayResults }) {

    let count = 0

    function handleResult (input, min, max) {
        if (input < min) return (<p className='text-[#FF0000] font-semibold cursor-pointer'>LOW</p>)
        else if(input > max) return (<p className='text-[#FF0000] font-semibold'>HIGH</p>)
        else return (<p className='text-[#008000] font-semibold'>GOOD</p>)
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" sx={{border: 2}}>
                    <TableHead>
                        <TableRow color="warning" sx={{borderBottom: 2}}>
                            <TableCell sx={{backgroundColor: "primary"}}>Test</TableCell>
                            <TableCell align="left">Input</TableCell>
                            <TableCell align="left">Range</TableCell>
                            <TableCell align="left">Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => {
                            if (
                                item.input !== null 
                                && item.input !== "NaN"
                                && item.input !== 0 
                                && item.input !== ""
                            ) {
                                return(
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.name}{item.unit != "" ? ` (${item.unit})` : ""}
                                        </TableCell>
                                        <TableCell align="left">{item.input}</TableCell>
                                        <TableCell align="left">{item.min} - {item.max}</TableCell>
                                        <TableCell align="left">{handleResult(item.input, item.min, item.max)}</TableCell>
                                    </TableRow> 
                                )
                            } else {count+=1}      
                        })}
                        {count > 11 ? (
                            <TableRow>
                                <TableCell>No Data</TableCell>
                            </TableRow>
                            ) : (null)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='flex items-center justify-center mb-8'>
                <Button 
                        type="button" 
                        className="text-black dark:text-blue-400 mt-4 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900" 
                        variant="contained"
                        sx={{border: 2 }}
                        onClick={() => {
                            window.screenTop
                            setDisplayResults(false)
                        }}
                    >
                        Back
                </Button>
            </div>
        </div> 
    )
}
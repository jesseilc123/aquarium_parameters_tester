"use client";  // This is a client component
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function SaltwaterRoute({ route, ranges, title }) {
    return (
        <div className='flex h-full w-full items-center justify-center sm:justify-center flex-col'>
            <Typography variant='h5' className='mb-2'>{title}</Typography>
            <div className='flex w-full px-4 items-center justify-center'>
                {route !==  "salt_all" ? (
                    <Paper sx={{ width: "100%", maxWidth: 440, overflow: 'hidden' }} className='border-2 - border-black'>
                        <TableContainer sx={{ maxHeight: 700 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold"}} >Parameter</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold"}}>Ranges</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ranges.map((row) => (
                                        <TableRow
                                            key={row.parameter}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {`${row.parameter} ${row.unit}`}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.min - row.max !== 0 ? 
                                                    (`${row.min} - ${row.max}`)
                                                    : (row.min) 
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                ) : (
                    <Paper sx={{ display: "flex", width: "100%", maxWidth: 700, overflow: 'hidden', height: "100%" }} className='border-2 - border-black'>
                        <TableContainer sx={{ maxHeight: "screen" }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell component="th" scope="row" className='font-bold' sx={{minWidth: 150}}>
                                            Parameter
                                        </TableCell>
                                        <TableCell align="right" className='font-bold' sx={{minWidth: 150}}>FOWLR</TableCell>
                                        <TableCell align="right" className='font-bold' sx={{minWidth: 150}}>Reef</TableCell>
                                        <TableCell align="right" className='font-bold' sx={{minWidth: 150}}>Ocean</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ranges.map((row) => (
                                        <TableRow 
                                            key={row.parameter}
                                        >
                                            <TableCell >{row.parameter}</TableCell>
                                            <TableCell align="right">{row.reef}</TableCell>
                                            <TableCell align="right">{row.fowlr}</TableCell>
                                            <TableCell align="right">{row.ocean}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                )}
            </div>
        </div>
    )
}
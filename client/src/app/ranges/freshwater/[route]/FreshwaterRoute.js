"use client";  // This is a client component
import React from 'react';
import { 
    Typography, 
    Paper, 
    TableRow, 
    TableHead, 
    TableContainer, 
    TableCell, 
    TableBody, 
    Table 
} from '@mui/material';

export default function FreshwaterRoute({ route, ranges, title }) {
    return (
        <div className='flex h-full w-full items-center justify-center sm:justify-center flex-col'>
            <Typography variant='h5' className='mb-2'>{title}</Typography>
            <div className='flex w-full items-center justify-center'>
                {route !== "fresh_all" ? (
                    <Paper sx={{ width: "100%", maxWidth: 440, overflow: 'hidden' }} className='border-2 - border-black'>
                        <TableContainer sx={{ maxHeight: 440}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold" }}>Parameter</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "bold" }}>Ranges</TableCell>
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
                    <Paper sx={{ width: "100%", maxWidth: 700, overflow: 'hidden' }} className='border-2 - border-black'>
                        <TableContainer sx={{ maxHeight:  600 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell component="th" scope="row" className='font-bold' sx={{ minWidth: 100 }}>
                                            Parameter
                                        </TableCell>
                                        <TableCell align="right" className='font-bold' sx={{ minWidth: 100 }}>Freshwater Community</TableCell>
                                        <TableCell align="right" className='font-bold' sx={{ minWidth: 100 }}>African Cichlid</TableCell>
                                        <TableCell align="right" className='font-bold' sx={{ minWidth: 100 }}>Freshwater Plants & Discus</TableCell>
                                        <TableCell align="right" className='font-bold' sx={{ minWidth: 100 }}>Brackish</TableCell>
                                        <TableCell align="right" className='font-bold' sx={{ minWidth: 100 }}>Pond</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ranges.map((row) => (
                                        <TableRow
                                            key={row.parameter}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell >{row.parameter}</TableCell>
                                            <TableCell align="right">{row.community}</TableCell>
                                            <TableCell align="right">{row.cichlid}</TableCell>
                                            <TableCell align="right">{row.plantsDiscus}</TableCell>
                                            <TableCell align="right">{row.brackish}</TableCell>
                                            <TableCell align="right">{row.pond}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                )}
            </div>
        </div>
    );
};
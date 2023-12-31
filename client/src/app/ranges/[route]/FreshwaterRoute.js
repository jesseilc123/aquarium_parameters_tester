"use client";  // This is a client component
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FreshwaterRoute({ route, ranges }) {
    return (
        <div className='flex h-full w-full items-center justify-center sm:justify-center flex-col'>
            <div className='flex w-full px-4 items-center justify-center'>
                {route !== "fresh_all" ? (
                    <div className='flex flex-col gap-2 md:min-w-[500px]'>
                        <TableContainer component={Paper}>
                            <Table sx={{ border: 2}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold"}}>Parameter</TableCell>
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
                    </div>
                ) : (
                    <div className='flex flex-col w-full xl:max-w-[55%] px-4'>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, border: 2}} aria-label="simple table" style={{ tableLayout: "fixed" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell 
                                            component="th" 
                                            scope="row" 
                                            className='sticky left-0 bg-white dark:bg-[#1E1E1E] border-r-2 border-r-black'
                                        >
                                            Parameter
                                        </TableCell>
                                        <TableCell align="right">Freshwater Community</TableCell>
                                        <TableCell align="right">African Cichlid</TableCell>
                                        <TableCell align="right">Freshwater Plants & Discus</TableCell>
                                        <TableCell align="right">Brackish</TableCell>
                                        <TableCell align="right">Pond</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ranges.map((row) => (
                                        <TableRow
                                            key={row.parameter}
                                        >
                                            <TableCell className="sticky left-0 bg-white dark:bg-[#1E1E1E] border-r-2 border-r-black">{row.parameter}</TableCell>
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
                    </div>
                )}
            </div>
        </div>
    )
}
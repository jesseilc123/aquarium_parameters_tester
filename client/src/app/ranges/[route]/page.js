"use client";  // This is a client component
import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button"
import { communities } from "../../constants/index"
import Link from 'next/link'

export default function RangeDetails({ params }) {
    const route = params.route
    const [ranges, setRanges] = useState([])
    
    useEffect(() => {
        for(let i in communities) {
            if(communities[i].route === route){
                setRanges(communities[i].parameters)
            }
        }
    }, [setRanges])

    return (
        <div className='flex h-full w-full items-center justify-center sm:justify-center flex-col mt-[64px]'>
            <div className='flex w-full px-4 items-center justify-center'>
                {route !== "all" ? (
                    <div className='flex flex-col gap-2'>
                        <Link className="flex items-center" href={`/ranges`}>
                            <Button 
                                className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                                variant="contained"
                                sx={{border: 2}}
                            >
                                Back
                            </Button>
                        </Link>
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
                    <div className='flex flex-col w-full lg:max-w-[50%] px-4 items-center justify-center'>
                        <Link href={`/ranges`}>
                            <Button 
                                className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                                variant="contained"
                                sx={{border: 2}}
                            >
                                Back
                            </Button>
                        </Link>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650}} aria-label="simple table" style={{ tableLayout: "fixed" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell 
                                            component="th" 
                                            scope="row" 
                                            className='sticky left-0 bg-white dark:bg-[#1E1E1E] border-r-2 border-r-grey-100'
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
                                            <TableCell className="sticky left-0 bg-white dark:bg-[#1E1E1E] border-r-2 border-r-grey-100">{row.parameter}</TableCell>
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
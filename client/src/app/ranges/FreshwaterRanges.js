"use client";  // This is a client component
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FreshwaterRanges() {
    const ranges = [
        {parameter: "Temperature", community: "72 - 82°F", cichlid: "72 - 82°F", plantsDiscus: "76 - 86°F", brackish: "72 - 82°F", pond: "33 - 86°F"},
        {parameter: "pH", community: "6.5 - 7.5", cichlid: "7.8 - 8.5", plantsDiscus: "6.0 - 7.5", brackish: "7.5 - 8.4", pond: "6.5 - 7.5"},
        {parameter: "Ammonia", community: "0", cichlid: "0", plantsDiscus: "0", brackish: "0", pond: "0"},
        {parameter: "Nitrite", community: "0", cichlid: "0", plantsDiscus: "0", brackish: "0", pond: "0"},
        {parameter: "Nitrate", community: "< 50 ppm", cichlid: "< 50 ppm", plantsDiscus: "< 30 ppm", brackish: "< 50 ppm", pond: "< 50 ppm"},
        {parameter: "Alkalinity", community: "4 - 8 KH", cichlid: "10 - 18 KH", plantsDiscus: "3 - 8 KH", brackish: "10 - 18 KH", pond: "4 - 8 KH"},
        {parameter: "General Hardness", community: "4 - 12 GH", cichlid: "12 - 20 GH", plantsDiscus: "3 - 8 GH", brackish: "12 - 20 GH", pond: "4 - 12 GH"},
    ]

    return(
        <div className='flex w-full lg:max-w-[70%] px-4 items-center justify-start sm:justify-center'>
            <TableContainer component={Paper} className='border-[1px] mb-[20px]'>
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
    )

}
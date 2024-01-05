// "use client";  // This is a client component
// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// export default function FreshwaterRanges() {
//     const ranges = [
//         {parameter: "Specific Gravity", reef: "1.023 - 1.025", fowlr: "1.020 - 1.025", ocean: "1.025"},
//         {parameter: "Temperature", reef: "72 - 78°F", fowlr: "72 - 78°F", ocean: "82°F"},
//         {parameter: "pH", reef: "8.1 - 8.4", fowlr: "8.1 - 8.4", ocean: "8.0 - 8.5"},
//         {parameter: "Alkalinity", reef: "8 - 12 dKH", fowlr: "8 - 12 dKH", ocean: "6 - 8 dKH"},
//         {parameter: "Ammonia ", reef: "0", fowlr: "0", ocean: "0"},
//         {parameter: "Nitrite", reef: "0", fowlr: "0", ocean: "0"},
//         {parameter: "Nitrate", reef: "< 1.0 ppm", fowlr: "< 30 ppm", ocean: "0.25 ppm"},
//         {parameter : "Phosphate", reef: "< 0.2 ppm", fowlr: "< 1.0 ppm", ocean: "0.13 ppm"},
//         {parameter : "Calcium", reef: "350 - 450 ppm", fowlr: "350 - 450 ppm", ocean: "1.025"},
//         {parameter : "Magnesium", reef: "1250 - 1350 ppm", fowlr: "1150 - 1350 ppm", ocean: "1300 ppm"},
//         {parameter : "Iodine", reef: "0.06 - 0.10 ppm", fowlr: "0.04 - 0.10 ppm", ocean: "0.06 ppm"},
//         {parameter : "Strontium", reef: "8 - 14 ppm", fowlr: "4 - 10 ppm", ocean: "8 - 10 ppm"},
//     ]

//     return(
//         <div className='flex w-full lg:max-w-[50%] h-[50%] px-4 items-center justify-start'>
//             <TableContainer component={Paper} className='flex border-[1px] mb-[20px]'>
//                 <Table sx={{ minWidth: 440}} aria-label="simple table" style={{ tableLayout: "fixed" }}>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell 
//                                 component="th" 
//                                 scope="row"
//                                 className='sticky left-0 bg-white dark:bg-[#1E1E1E] border-r-2 border-r-grey-100'
//                             >
//                                 Parameter
//                             </TableCell>
//                             <TableCell align="right">Reef Aquarium</TableCell>
//                             <TableCell align="right">FOWLR Aquarium</TableCell>
//                             <TableCell align="right">Average Level: Coral Reefs</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {ranges.map((row) => (
//                             <TableRow
//                                 key={row.parameter}
//                             >
//                                 <TableCell className="sticky left-0 bg-white dark:bg-[#1E1E1E] border-r-2 border-r-grey-100">{row.parameter}</TableCell>
//                                 <TableCell align="right">{row.reef}</TableCell>
//                                 <TableCell align="right">{row.fowlr}</TableCell>
//                                 <TableCell align="right">{row.ocean}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     )
// }

"use client";  // This is a client component
import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import { reefs } from '../constants';
import Link from 'next/link'

export default function SaltwaterRanges() {
    return(
        <div className='flex flex-wrap gap-3 mb-10 px-4 w-full items-center justify-center max-w-[80%]'>
            {reefs.map((item) => (
                <Link key={item.route} href={`/ranges/${item.route}`}>
                    <Card sx={{ width: 345, height: 300 }} elevation={4}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 200 }}
                                src={`${item.image}`}
                                alt={item.name}
                            />
                            <CardContent sx={{display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography size="small" color="primary" sx={{marginBottom: "4px"}}>
                                    View ranges
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
"use client";  // This is a client component
import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import { reefs } from "../../constants/index"
import Link from 'next/link'

export default function SaltwaterRanges() {
    return(
        <div className='flex flex-wrap gap-3 px-4 w-full items-center justify-center max-w-[80%]'>
            {reefs.map((item) => (
                <Link key={item.route} href={`/ranges/saltwater/${item.route}`}>
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
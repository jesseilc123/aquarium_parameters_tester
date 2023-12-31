"use client";  // This is a client component
import React, {useEffect} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { communities } from '../constants';
import Link from 'next/link'

export default function FreshwaterRanges({ setActive }) {
    return(
        <div className='flex flex-wrap gap-3 mb-10 px-4 w-full items-center justify-center'>
            {communities.map((item) => (
                <Link key={item.route} href={`/ranges/${item.route}`}>
                    <Card sx={{ width: 345, height: 300 }}>
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
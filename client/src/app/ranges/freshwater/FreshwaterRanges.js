"use client";  // This is a client component
import React, {useEffect} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { communities } from '../../constants';
import Link from 'next/link'

export default function FreshwaterRanges() {
    return(
        <div className='flex flex-wrap gap-3 px-4 w-full items-center justify-center max-w-[80%]'>
            {communities.map((item) => (
                <Link key={item.route} href={`/ranges/freshwater/${item.route}`}>
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
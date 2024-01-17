"use client";  // This is a client component
import React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { communities } from '../../constants';
import Link from 'next/link'

export default function FreshwaterRanges() {
    return (
        <div className='flex flex-wrap gap-1 w-full items-center justify-center sm:max-w-[80%]'>
            {communities.map((item) => (
                <Link key={item.route} href={`/ranges/freshwater/${item.route}`}>
                    <Card sx={{ width: {sm: 400}, height: 345, margin: 1 }} elevation={4} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 245, width: 400 }}
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
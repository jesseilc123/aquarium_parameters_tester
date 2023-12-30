"use client";  // This is a client component
import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { communities } from '../constants';
import Link from 'next/link'

export default function FreshwaterRanges() {
    return(
        <div className='flex flex-wrap gap-3 mb-10 px-4 w-full items-center justify-center'>
            {communities.map((item) => (
                <Link key={item.route} href={`/ranges/${item.route}`}>
                    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 200 }}
                                src={`${item.image}`}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <Typography size="small" color="primary" sx={{display: "flex", justifyContent: 'center', marginBottom: "4px"}}>
                                View ranges
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}
        </div>
    )

}
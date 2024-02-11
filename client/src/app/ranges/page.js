"use client";
import React from 'react';
import { 
    CardActionArea, 
    Typography, 
    CardMedia, 
    CardContent, 
    Card,
} from '@mui/material';
import Link from 'next/link';

export default function Ranges() {
    return (
        <main className='flex flex-col items-center justify-center mt-[80px] mb-4'>
            <Typography variant='h2' className='mb-4'>Aquariums</Typography>
            <div className='flex justify-center items-center flex-row h-full w-full flex-wrap gap-4 px-2'>
                <Link href={"/ranges/freshwater"}>
                    <Card sx={{ maxWidth: 750, maxHeight: 750 }} elevation={4} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: {sm: 300, md: 500}, width: {sm: 400, md: 600} }}
                                image="/freshwater_card.jpg"
                                alt="freshwater aquariums"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align='center'>
                                    Freshwater Aquariums
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link href={"/ranges/saltwater"} >
                    <Card sx={{ maxWidth: 750, maxHeight: 750 }} elevation={4}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: {sm: 300, md: 500}, width: {sm: 400, md: 600} }}
                                image="/saltwater_card.jpg"
                                alt="saltwater aquariums"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align='center'>
                                    Saltwater Aquariums
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        </main>
    );
};
"use client";
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function Ranges() {
    return (
        <main className='flex flex-col items-center justify-center mt-[80px] mb-5'>
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
                                <Typography gutterBottom variant="h5" component="div">
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
                                <Typography gutterBottom variant="h5" component="div">
                                    Saltwater Aquariums
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {/* <Image src={"/saltwater_card.jpg"} width={500} height={500} alt="Saltwater card"objectFit='contain'/> */}
                </Link>
            </div>
        </main>
    );
}
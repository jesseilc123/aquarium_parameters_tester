"use client";
import React, { useEffect, useState } from 'react';
import SaltwaterRanges from './SaltwaterRanges';
import { Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation'

export default function Saltwater() {
    const router = useRouter()

    return (
        <div className="flex h-full w-full items-center justify-center flex-col mt-[80px]">
            <Typography variant='h2' className='mb-6'>Saltwater Aquariums</Typography>
            <SaltwaterRanges />
            <div className='flex mt-4'>
                <Button 
                    onClick={() => router.push("/ranges")}
                    className="text-black dark:text-blue-400 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                    variant="contained"
                    sx={{border: 2}}
                >
                    Back
                </Button>
            </div>
        </div>
    )
}
"use client";  // This is a client component
import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button"
import { communities } from "../../constants/index"
import { reefs } from "../../constants/index"
import { useRouter } from 'next/navigation'
import FreshwaterRoute from './FreshwaterRoute';
import SaltwaterRoute from './SaltwaterRoute';

export default function RangeDetails({ params }) {
    const router = useRouter()
    const route = params.route
    const [ranges, setRanges] = useState([])
    
    useEffect(() => {
        for(let i in communities) {
            if(communities[i].route === route){
                setRanges(communities[i].parameters)
            }
        }
        for(let i in reefs) {
            if(reefs[i].route === route){
                setRanges(reefs[i].parameters)
            }
        }
    }, [setRanges])

    return (
        <div className='flex h-full w-full items-center justify-center sm:justify-center flex-col mt-[64px] mb-11'>
            <div className='flex w-full px-4 items-center flex-col gap-2'>
                <Button 
                    onClick={() => router.push('/ranges')}
                    className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                    variant="contained"
                    sx={{border: 2}}
                >
                    Back
                </Button>
                {route.includes("fresh") 
                    ? (<FreshwaterRoute route={route} ranges={ranges}/>) 
                    : (<SaltwaterRoute route={route} ranges={ranges}/>)
                }
            </div>
        </div>
    );
};
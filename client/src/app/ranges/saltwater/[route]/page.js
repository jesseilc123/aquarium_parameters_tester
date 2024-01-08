"use client";  // This is a client component
import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button"
import { reefs } from "../../../constants/index"
import { useRouter } from 'next/navigation'
import SaltwaterRoute from './SaltwaterRoute';

export default function RangeDetails({ params }) {
    const router = useRouter()
    const route = params.route
    const [ranges, setRanges] = useState([])
    const [title, setTitle] = useState([])
    
    useEffect(() => {
        for(let i in reefs) {
            if(reefs[i].route === route){
                setRanges(reefs[i].parameters)
                setTitle(reefs[i].name)
            }
        }
    }, [setRanges, route])

    function handleClick() {
        router.push("/ranges/saltwater")
    }

    return (
        <div className='flex items-center h-full w-full flex-col mt-[80px] mb-20'>
            <div className='flex w-full px-4 items-center flex-col gap-2'>
                <SaltwaterRoute route={route} ranges={ranges} title={title}/>
                <Button 
                    onClick={handleClick}
                    className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                    variant="contained"
                    sx={{border: 2}}
                >
                    Back
                </Button>
            </div>
        </div>
    );
};
"use client";  // This is a client component
import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button"
import { communities } from "../../../constants/index"
import { useRouter } from 'next/navigation'
import FreshwaterRoute from './FreshwaterRoute';

export default function FreshwaterRangeDetails({ params }) {
    const router = useRouter()
    const route = params.route
    const [ranges, setRanges] = useState([])
    const [title, setTitle] = useState([])

    useEffect(() => {
        for(let i in communities) {
            if(communities[i].route === route){
                setRanges(communities[i].parameters)
                setTitle(communities[i].name)
            }
        }
    }, [setRanges, route])
    return (
        <div className='flex items-center h-full w-full flex-col mt-[80px] mb-11'>
            <div className='flex px-4 w-full flex-col gap-2 justify-center items-center'>
                <FreshwaterRoute route={route} ranges={ranges} title={title} />
                <div >
                    <Button 
                        onClick={() => router.push("/ranges/freshwater")}
                        className="text-black dark:text-blue-400 mt-2 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                        variant="contained"
                        sx={{border: 2}}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
};
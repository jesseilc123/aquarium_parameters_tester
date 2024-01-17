"use client";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function TheHow() {
    return (
        <Card sx={{maxWidth: {xs: "full", sm:"75%", lg:"50%"}, margin: 1 }} elevation={4}>
            <CardContent>
                <Typography variant='h4' gutterBottom>How to test your water parameters</Typography>
                <Divider />
                <Typography className='mt-2 font-bold'>Basics</Typography>
                <Typography gutterBottom>
                    The idea of testing your water parameters can be daunting at first. Depending on the type of your aquarium, the list of parameters to test kit for seem endless. But in reality, it&apos;s much simpler than you would think. You can buy a test kit that has all the tests you need and also include instructions on how to use them or get your water tested at a local fishstore.  
                </Typography>
                <Typography className='mt-2 font-bold'>
                    Nitrogen Cycle
                </Typography>
                <Typography gutterBottom>
                    Make sure you understand the Nitrogen Cycle. If you&apos;ve ever heard the term &quot;cycling&quot; your tank, it refers to the Nitrogen Cycle. This cycle builds beneficial bacteria which help eliminate waste that&apos;s toxic for your fish. This is primarily why you don&apos;t want to do 100% water changes. Beginners tend to overlook this step and don&apos;t take it into consideration when establishing a tank. 
                </Typography>
                <Divider />
                <div className='flex items-center justify-center mt-1'>
                    <Image className=" mt-2 mb-2" src="/water_cycle.png" alt="Water Cycle" width={1000} height={550}/>
                </div>
                <Link 
                    className="hover:text-blue-400 dark:hover:text-gray-500"
                    href={"https://www.cheapplantedaquarium.com/cycling-your-aquarium/"}
                >
                    https://www.cheapplantedaquarium.com
                </Link>
            </CardContent>
        </Card>
    );
};
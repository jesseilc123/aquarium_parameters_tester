"use client";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';

export default function Welcome() {
    return (
        <Card sx={{maxWidth: {xs: "full", sm:"75%", lg:"50%"}, margin: 1 }} elevation={4}>
            <CardContent sx={{display: "flex", flexDirection: "column"}}>
                <Typography variant='h4' gutterBottom >
                    Welcome to the Aquarium Parameter Checker!
                </Typography>
                <Divider />
                <Typography className='mt-2' gutterBottom>
                    The purpose of this website is to help fellow aquarium hobbyist (like myself) better understand the water parameters in their tanks. The 
                    <span 
                        className='font-bold'
                    >
                        &nbsp;Tests&nbsp;
                    </span> 
                    tab allows you to input data you've collected from your test kit to see if the results are in good or bad ranges for your tank type. The 
                    <span  
                        className='font-bold'
                    >
                        &nbsp;Ranges&nbsp;
                    </span>
                    tab allows you to see good water parameters ranges for your tank type. The data used in this website is from <Link href="https://www.liveaquaria.com/article/89/?aid=89" className='font-bold'>LiveAquaria</Link>, so feel free to check them out if you have any questions on parameter ranges. You can also contact me directly if you have any questions or suggestions to make this website better. I want to create a website to not only help myself, but other alike!  
                </Typography>
                <Divider />
                <div className='flex justify-center flex-wrap items-center gap-4 sm:gap-20 mt-4'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <Avatar sx={{height: 100, width: 100}} src="/profilepic.jpg">
                            J
                        </Avatar>
                        <div>
                            <Typography fontWeight={"bold"}>Contact Info</Typography>
                            <Typography >Jesse Ilc</Typography>
                            <Typography>jesseilc123@gmail.com</Typography>
                        </div>  
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <Avatar src='/github.png'/>
                            <Link className="hover:text-[#0000FF]" href={"https://github.com/jesseilc123/aquarium_parameters_tester"}>GitHub</Link>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Avatar src='/devto.png'/>
                            <Link className="hover:text-[#0000FF]" href={"https://dev.to/jesseilc123"}>Dev.to</Link>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Avatar src="/linkedin.png"/>
                            <Link className="hover:text-[#0000FF]" href={"https://www.linkedin.com/in/jesse-ilc-se2023/"}>LinkedIn</Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
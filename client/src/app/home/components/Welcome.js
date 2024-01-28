"use client";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';

export default function Welcome() {
    return (
        <Card sx={{ maxWidth: {xs: "full", sm:"75%", lg:"50%"}, margin: 1 }} elevation={4}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='h4' gutterBottom >
                    Welcome to the Aquarium Parameter Checker!
                </Typography>
                <Divider />
                <Typography className='mt-2 font-bold' align="center">Introduction</Typography>
                <Typography>
                    The purpose of this website is to help fellow aquarium hobbyist (like myself) better understand the water parameters in their tanks.
                </Typography> 
                <Typography className='mt-2 font-bold' align="center">Site Features</Typography>
                <Typography>
                    The 
                    <Link 
                        href={"/tests"}
                        className='font-bold dark:text-blue-400 hover:text-blue-400 dark:hover:text-gray-500'
                    >
                        &nbsp;Tests&nbsp;
                    </Link> 
                    tab allows you to input data you&apos;ve collected from your test kit to see if the results are in good or bad ranges for your tank type. The 
                    <Link
                        href={"/ranges"}  
                        className="font-bold dark:text-blue-400 hover:text-blue-400 dark:hover:text-gray-500"
                    >
                        &nbsp;Ranges&nbsp;
                    </Link>
                    tab allows you to see good water parameters ranges for your tank type. The data used in this website is from 
                    <Link 
                        href="https://www.liveaquaria.com/article/89/?aid=89" 
                        className='font-bold dark:text-blue-400 hover:text-blue-400 dark:hover:text-gray-500'
                    >
                        &nbsp;LiveAquaria
                    </Link>
                    , so feel free to check them out if you have any questions on parameter ranges.
                </Typography>
                <Typography className='mt-2 font-bold' align="center">Support</Typography>
                <Typography gutterBottom>
                    You can also contact me directly if you have any questions or suggestions to make this website better. I want to create a website to not only help myself, but other alike!  
                </Typography>
                <Divider />
                <div className='flex justify-center flex-wrap items-center gap-4 sm:gap-20 mt-4'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <Avatar sx={{height: 100, width: 100}} src="/profilepic.jpg" />
                        <div>
                            <Typography fontWeight={"bold"}>Contact Info</Typography>
                            <Typography >Jesse Ilc</Typography>
                            <Typography>jesseilc123@gmail.com</Typography>
                        </div>  
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <Avatar src='/github.png'/>
                            <Link 
                                className="hover:text-blue-400 dark:hover:text-gray-500" 
                                href={"https://github.com/jesseilc123/aquarium_parameters_tester"}
                            >
                                GitHub
                            </Link>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Avatar src='/devto.png'/>
                            <Link 
                                className="hover:text-blue-400 dark:hover:text-gray-500" 
                                href={"https://dev.to/jesseilc123"}
                            >
                                Dev.to
                            </Link>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Avatar src="/linkedin.png"/>
                            <Link 
                                className="hover:text-blue-400 dark:hover:text-gray-500" 
                                href={"https://www.linkedin.com/in/jesse-ilc-se2023/"}
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
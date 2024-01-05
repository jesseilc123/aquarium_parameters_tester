"use client";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';

export default function TheWhy() {
    return (
        <Card sx={{maxWidth: {xs: "full", sm:"75%", lg:"50%"}, margin: 1}} elevation={4}>
            <CardContent>
                <Typography variant='h4' gutterBottom>Why should you test your water parameters?</Typography>
                <Divider/>
                <Typography className='mt-2'>
                    Most beginners or even experienced aquarium hobbyists tend to overlook or aren't even aware of the importance of tracking water parameters. Some fish can demand very specific water parameters to ensure healthy lives and good growth. By testing your water parameters you can help balance your water chemistry leading to cleaner aquariums, healthier fish, and longer fish lifespans. Make sure to do your own research on your aquarium to figure out what your aquarium needs are.
                </Typography>
            </CardContent>
        </ Card>
    );
};
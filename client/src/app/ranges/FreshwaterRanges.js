"use client";  // This is a client component
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {community} from "../assets/index.js"


export default function FreshwaterRanges() {
    const communities = [
        {name: "Freshwater Community", temperature: "72 - 82°F", ph: "6.5 - 7.5", ammonia: "0.0", nitrite: "0.0", nitrate: "< 50 ppm", kh: "4-8 KH", gh: "4-12 GH", image: community},
        {name: "African Cichlid", temperature: "72 - 82°F", ph: "7.8 - 8.5", ammonia: "0.0", nitrite: "0.0", nitrate: "< 50 ppm", kh: "10-18 KH", gh: "12-20 GH", image: ""},
        {name: "Freshwater Plants & Discus", temperature: "76 - 86°F", ph: "6.0 - 7.5", ammonia: "0.0", nitrite: "0.0", nitrate: "< 30 ppm", kh: "3-8 KH", gh: "3-8 GH", image: ""},
        {name: "Brackish", temperature: "72 - 82°F", ph: "7.5 - 8.4", ammonia: "0.0", nitrite: "0.0", nitrate: "< 50 ppm", kh: "10-18 KH", gh: "12-20 GH", image: ""},
        {name: "Pond", temperature: "33 - 86°F", ph: "6.5 - 7.5", ammonia: "0.0", nitrite: "0.0", nitrate: "< 50 ppm", kh: "4-8 KH", gh: "4-12 GH", image: ""},
    ]

    return(
        <div className='flex flex-wrap gap-3 xl:max-w-[60%] lg:max-w-[80%] sm:max-w-[90%] px-4 w-full items-center justify-center'>
            {communities.map((item) => (
                <Card key={item.name} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={community}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            View ranges
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )

}
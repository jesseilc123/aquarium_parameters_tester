"use client";  // This is a client component
import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function FreshwaterRanges() {
    const communities = [
        {name: "Freshwater Community", image: "/fish-aquariums.jpg"},
        {name: "African Cichlid", image: "/african_cichlid.jpg"},
        {name: "Freshwater Plants & Discus", image: "/discus.jpg"},
        {name: "Brackish", image: "/brackish.jpg"},
        {name: "Pond", image: "/pond.jpg"},
        {name: "All", image: "/all.jpg"}
    ]

    return(
        <div className='flex flex-wrap gap-3 mb-10 px-4 w-full items-center justify-center'>
            {communities.map((item) => (
                <Card key={item.name} sx={{ maxWidth: 345, maxHeight: 400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            sx={{ height: 200 }}
                            src={`${item.image}`}
                            alt={item.name}
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
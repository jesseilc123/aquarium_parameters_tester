"use client";
import Typography from '@mui/material/Typography';

export default function Welcome() {
    return (
        <div>
            <Typography variant="h3" sx={{display: "flex", justifyContent: "center"}} gutterBottom>
                Welcome to The Aquarium Parameter Checker!
            </Typography>
        </div>
    );
};
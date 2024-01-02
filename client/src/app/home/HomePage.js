"use client";
import TheWhy from "./components/TheWhy";
import TheHow from "./components/TheHow";
import Welcome from "./components/Welcome";
import Typography from '@mui/material/Typography';

export default function HomePage() {
    return (
        <main className='flex min-h-screen h-full flex-col'>
            <div className="flex h-full w-full items-center justify-start sm:justify-center flex-col mt-[64px]">
                <Welcome />
                <TheWhy />
                <TheHow />
            </div>
        </main>
    );
};
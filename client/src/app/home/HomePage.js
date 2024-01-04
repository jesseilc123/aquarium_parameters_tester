"use client";
import TheWhy from "./components/TheWhy";
import TheHow from "./components/TheHow";
import Welcome from "./components/Welcome";

export default function HomePage() {
    return (
        <main className='flex min-h-screen h-full flex-col'>
            <div className="flex h-full w-full items-center justify-center flex-col mt-[80px] gap-4">
                <Welcome />
                <TheWhy />
                <TheHow />
            </div>
        </main>
    );
};
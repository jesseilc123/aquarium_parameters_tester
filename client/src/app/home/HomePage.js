"use client";
import TheWhy from "./components/TheWhy";
import TheHow from "./components/TheHow";
import Welcome from "./components/Welcome";

export default function HomePage() {
    return (
        <main className='flex min-h-screen h-full flex-col'>
            <div className="flex h-full w-full items-center justify-center flex-col sm:mt-[80px] mt-[64px] gap-4 mb-5">
                <Welcome />
                <TheWhy />
                <TheHow />
            </div>
        </main>
    );
};
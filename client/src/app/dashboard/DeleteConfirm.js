"use client";
import React from "react";
import { Typography, Button } from "@mui/material";

export default function DeleteConfirm({ renderDelete, setOpenDelete, tankId }) {
    
    function handleTankDelete() {
        setOpenDelete(false)
        fetch("http://localhost:5555/tanks", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": tankId,
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((r) => renderDelete(tankId))
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    return (
        <main className="flex flex-col justify-center items-center sm:w-[400px] sm:h-[200px]">
            <div className="flex flex-col gap-1">
                <Typography variant="h4">Are you sure?</Typography>
                <Typography variant="p">This action cannot be undone</Typography>
            </div>
            <div className="flex flex-row gap-2 mt-3">
                <Button 
                    variant="outlined" 
                    className="hover:text-red-500 hover:border-red-500"
                    onClick={() => handleTankDelete()}
                >
                    Continue
                </Button>
                <Button variant="outlined" onClick={() => setOpenDelete(false)}>Cancel</Button>
            </div>
        </main>
    )
}
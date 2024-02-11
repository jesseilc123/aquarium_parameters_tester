"use client";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { Button, InputLabel, Typography } from "@mui/material";


export default function TankEdit( { setOpenEdit, tankId, renderEdit } ) {
    const [valid, setValid] = useState(true)
    const { register, handleSubmit, onChange, getValues, formState: { errors } } = useForm();

    const onSubmit = (form) => {
        const formData = { 
            name: form.name, 
            id: tankId
        }

        fetch("http://localhost:5555/tanks", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then(r => {
            if (r.ok) {
                r.json().then(data => {
                    renderEdit(data)
                })
            } else {
                r.json().then(err => console.log(err))
            }
        })
    }
    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit(onSubmit)} 
            noValidate 
            sx={{ mt: 1, width: 1, height: 1, paddingX: 5, paddingY: 5, display: "flex", flexDirection: "column", gap: 4}}
        >
            <Typography variant="h3">Set new tank name</Typography>
            <div>
                <TextField
                    variant="outlined"
                    fullWidth
                    error={errors.name || !valid ? true : false}
                    id="name"
                    label="Set new name"
                    name="name"
                    autoFocus
                    {...register("name", {required: "Tank Name is required", maxLength: {value: 16, message: "Tank Name can't exceed 16 characters"}})}
                />
                {errors.name ? (<Typography align="left" color="red">{errors.name.message}</Typography>) : null}
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
                <Button variant="outlined" type="submit">
                    <Typography>Confirm</Typography>
                </Button>
                <Button variant="outlined" type="button">
                    <Typography onClick={() => setOpenEdit(false)} >Cancel</Typography>
                </Button>
            </div>
        </ Box>
    )
}
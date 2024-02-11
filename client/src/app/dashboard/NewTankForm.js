"use client";
import React, { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { UserContext } from '../providers';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { Typography, InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function NewTankForm({ renderNew, handleCloseNew }) {
    const router = useRouter()
    const [valid, setValid] = useState(true)
    const { user } = useContext(UserContext)
    const { register, handleSubmit, onChange, getValues, formState: { errors } } = useForm();

    const onSubmit = (form) => {
        const formData = { 
            name: form.name, 
            type: form.type,
            userId: user.id
        }

        fetch("http://localhost:5555/tanks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then(r => {
            if (r.ok) {
                r.json().then(data => {
                    setValid(true)
                    renderNew(data)
                })
            } else {
                r.json().then((err) => {
                    setValid(false)
                    console.log(err)
                })
            }
        })

    }

    return (
        <main className="flex flex-col justify-center items-center sm:w-[400px] sm:h-[425px]">
            <div className="flex items-center justify-center flex-col">
            <Typography align="justify" variant="h4" className="mt-3">Add Tank</Typography>
                <Box 
                    component="form" 
                    onSubmit={handleSubmit(onSubmit)} 
                    noValidate 
                    sx={{ mt: 1, width: 1, height: 1, paddingX: 5, display: "flex", flexDirection: "column", gap: 4}}
                >
                    <div>
                        <TextField
                            margin="normal"
                            fullWidth
                            error={errors.name || !valid ? true : false}
                            id="name"
                            label="Tank Name"
                            name="name"
                            autoFocus
                            {...register("name", {required: "Tank Name required", maxLength: {value: 16, message: "Tank Name can't exceed 16 characters"}})}
                        />
                        {errors.name ? (<Typography align="left" color="red">{errors.name.message}</Typography>) : null}
                    </div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Tank Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            label="Tank Type"
                            defaultValue={"Freshwater"}
                            onChange={onChange}
                            {...register("type")}
                        >
                            <MenuItem value={"Freshwater"}>Freshwater</MenuItem>
                            <MenuItem value={"Saltwater"}>Saltwater</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="flex flex-row gap-3">
                        <Button
                            type="submit"
                            fullWidth
                            variant="filled"
                            className="mt-4 text-black dark:text-blue-400 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                            sx={{ mt: 3, mb: 2, border: 2}}
                        >
                            Submit
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            variant="filled"
                            className="mt-4 text-black dark:text-blue-400 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-400 dark:hover:text-grey-900"
                            sx={{ mt: 3, mb: 2, border: 2}}
                            onClick={() => handleCloseNew()}
                        >
                            Cancel
                        </Button> 
                    </div>     
                </Box>
            </div>
        </main>
    )
}
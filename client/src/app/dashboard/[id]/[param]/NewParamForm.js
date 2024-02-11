"use client";
import React, { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { UserContext } from "@/app/providers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { Typography, Button } from "@mui/material";
import { useRouter } from 'next/navigation'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import { paramSchema } from "@/app/schemas";

export default function NewParamForm({ handleClose, param, renderNewParam, parameter }) {
    const router = useRouter()
    const [error, setError]= useState(false)
    const [date, setDate] = useState(dayjs())
    const { currentTank, renderGraphNew } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(paramSchema)});

    const onSubmit = (form) => {
        const takenDate = parameter.filter((param) => {
            if (param.created_at.slice(0, 10) === date.format("YYYY-MM-DD")) {
                return param
            }
        })

        if (takenDate.length > 0) {
            return setError(true)
        }

        const formData = {
            value: form.value, 
            date: date.format("YYYY-MM-DD"),
            tankId: currentTank.id
        }
        console.log(formData)



        fetch(`http://localhost:5555/${param}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then(r => {
            if (r.ok) {
                r.json().then(data => {
                    setError(false)
                    renderNewParam(data)
                    renderGraphNew(data, param)
                })
            } else {
                r.json().then((err) => {
                    console.log(err)
                })
            }
        })
    }

    return (
        <main className="flex flex-col justify-center items-center sm:w-[400px] sm:h-[425px] mb-5">
            <div className="flex items-center justify-center flex-col">
            <Alert severity="error" className={error ? "flex" : "hidden"}>Already booked for that date</Alert>
            <Typography align="justify" variant="h4" className="mt-3">Add {param}</Typography>
                <Box 
                    component="form" 
                    onSubmit={handleSubmit(onSubmit)} 
                    noValidate 
                    sx={{ mt: 1, width: 1, height: 1, paddingX: 5, display: "flex", flexDirection: "column", gap: 4}}
                >
                    <div>
                        <TextField
                            fullWidth
                            error={errors.value ? true : false}
                            id="value"
                            label="Value"
                            name="value"
                            autoFocus
                            {...register("value", {required: "Field is required"})}
                        />
                        {errors.value ? (<Typography align="left" color="red">{errors.value.message}</Typography>) : null}
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Controlled picker"
                                name="date"
                                value={date}
                                onChange={(newDate) => setDate(newDate)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <div className="flex flew-row gap-2">
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                        >
                            Submit
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            variant="outlined"
                            onClick={() => handleClose(false)}
                        >
                            Cancel
                        </Button> 
                    </div>   
                </Box>
            </div>
        </main>
    )
}
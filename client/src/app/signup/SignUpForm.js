"use client";
import React, { useState, useContext } from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from 'next/navigation'
import { UserContext } from "../providers"
import { signupSchema } from '../schemas';
import { useForm } from "react-hook-form";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

export default function SignUpForm() {
    const [valid, setValid] = useState(true)
    const router = useRouter()
    const { setUser } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(signupSchema)});

    const onSubmit = (form) => {
        const formData = { 
            username: form.username,
            email: form.email, 
            password: form.password,
        }

        fetch("http://localhost:5555/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then(r => {
            console.log(r)
            if (r.ok) {
                r.json().then(user => {
                    setUser(user)
                    setValid(true)
                    router.push('/dashboard')
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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={errors.username || !valid ? true : false}
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="Username"
                                autoComplete="username"
                                {...register("username", {
                                    required: "Please enter a valid username",
                                })}
                            />
                            {errors.username ? (<Typography align="left" color="red">{errors.username.message}</Typography>) : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                error={errors.mail || !valid ? true : false}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                {...register("email", {
                                    required: "Please enter a valid email",
                                })}
                            />
                            {errors.email ? (<Typography align="left" color="red">{errors.email.message}</Typography>) : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                error={errors.password || !valid ? true : false}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />
                            {errors.password ? (<Typography align="left" color="red">{errors.password.message}</Typography>) : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                error={errors.confirmPassword || !valid ? true : false}
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="current-password"
                                {...register("confirmPassword", {
                                    required: "confirmPassword is required",
                                })}
                            />
                            {errors.confirmPassword ? (<Typography align="left" color="red">{errors.confirmPassword.message}</Typography>) : null}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="text-black dark:text-blue-400 font-medium dark:bg-grey-800  hover:bg-grey-200 dark:hover:bg-blue-400 dark:hover:text-grey-900 border-2 hover:border-2 border-black"
                        sx={{ mt: 3, mb: 2, border: 2}}
                    >
                        Sign Up
                    </Button>
                    <div className='flex justify-center'>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </div>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}
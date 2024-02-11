"use client";

import React, { useState, useContext  } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'
import { loginSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup"
import { UserContext } from "../providers"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

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

export default function SignInForm() {
    const [valid, setValid] = useState(true)
    const router = useRouter()
    const { setUser } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(loginSchema)});

    const onSubmit = (form) => {
        const formData = { 
            email: form.mail, 
            password: form.password
        }

        fetch("http://localhost:5555/login", {
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
                    Sign in
                </Typography>
                {!valid ? (<Alert severity="error">Incorrect email or password</Alert>) : null}
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, width: "100%" }}>
                    <TextField
                        margin="normal"
                        onBlur={() => setValid(false)}
                        fullWidth
                        error={errors.mail || !valid ? true : false}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        {...register("mail", {
                            required: "Please enter a valid email",
                        })}
                    />
                    {errors.mail ? (<Typography align="left" color="red">{errors.mail.message}</Typography>) : null}
                    <TextField
                        margin="normal"
                        onBlur={() => setValid(true)}
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="text-black dark:text-blue-400 font-medium dark:bg-grey-800  hover:bg-grey-200 dark:hover:bg-blue-400 dark:hover:text-grey-900 border-2 hover:border-2 border-black"
                        sx={{ mt: 3, mb: 2, border: 2}}
                    >
                        Sign In
                    </Button>
                    <div className='flex justify-center'>
                        <Link href="/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </div>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}
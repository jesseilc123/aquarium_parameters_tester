"use client";

import React, { useState } from 'react';
import SignInForm from './SignInForm';

export default function Login() {
    return (
        <main className="flex items-center flex-col mt-[64px]">
            <SignInForm />
        </main>
    );
};
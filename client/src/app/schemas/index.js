import * as yup from "yup"

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
    mail: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().required("Required"),
})

export const signupSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required").max(250),
    username: yup.string().required("Required").max(250),
    password: yup.string().matches(passwordRules, { message: "Please create a stronger password" }).required("Required").max(250),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
})

export const paramSchema = yup.object().shape({
    value: yup.number().typeError("Must be a number").positive("Must be a positive number"),
})
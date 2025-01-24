import * as yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    age: yup.number().required("Age is required").positive().integer(),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters").matches(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref('password') , null], "Passwords must match")
});


export const advancedSchema = yup.object().shape({
    username: yup.string().required("Username is required").min(3, "Username must be at least 3 characters").max(15, "Username must be at most 15 characters"),
    jobType: yup.string().required("Job Type is required").oneOf(["designer", "developer", "manager", "other"], "Job Type must be one of the following: designer, developer, manger, other"),
    acceptedTos: yup.boolean().oneOf([true], "You must accept the terms of service")
});
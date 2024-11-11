import * as Yup from 'yup';

export const contactSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Too short!')
    .max(50, 'Too long!'),
  number: Yup.string()
    .required('Number is required')
    .min(3, 'Too short!')
    .max(50, 'Too long!'),
});

export const registrationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

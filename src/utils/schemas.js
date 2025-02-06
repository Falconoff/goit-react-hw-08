import * as Yup from 'yup';

export const contactSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Too short!')
    .max(50, 'Too long!'),
  number: Yup.string()
    .required('Number is required')
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Wrong format')
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

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

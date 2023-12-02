import * as yup from 'yup';
import { FileFormats } from '../types/FormTypes';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required enter name')
    .min(2, 'Name should be more than 2 characters')
    .max(19, 'Name should be less than 19 characters')
    .matches(/^[A-Z][a-z0-9_-]/, 'First letter should be uppercase'),
  age: yup
    .string()
    .required('Required enter age')
    .min(1, 'Name should be more than 1 characters')
    .max(3, 'Name should be less than 3 characters')
    .matches(/^[1-9][0-9]*?/, 'Age should be a positive number'),
  country: yup.string().required('Choose your counrty'),
  email: yup
    .string()
    .required('Required enter e-mail')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Enter email in valid format'),
  password: yup
    .string()
    .required('Enter password')
    .min(8, 'Password should be more than 8 characters')
    .max(32, 'Password should be less than 32 characters')
    .matches(/[A-Z]/, 'Password should contain at least 1 uppercase letter')
    .matches(/[a-z]/, 'Password should contain at least 1 lowercase letter')
    .matches(/[0-9]/, 'Password should contain at least 1 number')
    .matches(/[@$!%*?&]/, 'Password should contain at least 1 special character'),
  passwordConfirmation: yup
    .string()
    .required('Repeat the password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup
    .mixed<string>()
    .required('Choose gender')
    .oneOf(['Male', 'Female'], 'Choose male or female gender'),
  file: yup
    .mixed<FileList>()
    .required('You need to upload a file')
    .test('fileExist', 'You need to upload a file', (file) => {
      if (file && file.length) {
        return file && file.length !== 0;
      }
      return false;
    })
    .test('fileSize', 'File should be less than 2Mb', (file) => {
      if (file && file.length) {
        return file[0].size <= 2000000;
      }
      return false;
    })
    .test('fileExtension', 'File should be in png or jpeg format', (file) => {
      if (file && file.length) {
        return (
          file[0].type === FileFormats.JPEG ||
          file[0].type === FileFormats.JPG ||
          file[0].type === FileFormats.PNG
        );
      }
      return false;
    }),
  agreement: yup
    .boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions'),
});

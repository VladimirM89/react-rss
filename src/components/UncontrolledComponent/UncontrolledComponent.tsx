import React, { FormEvent, useRef, useState } from 'react';
import { FileFormats, FormInterface } from '../../types/FormTypes';
import { formSchema } from '../../utils/FormSchema';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { FormSlice } from '../../store/features/forms/FormSlice';
import SelectionComponent from '../SelectionComponent/SelectionComponent';
import UncontrolledInputComponent from '../UncontrolledInputComponent/UncontrolledInputComponent';
import styles from './UncontrolledComponent.module.scss';

const UncontrolledComponent = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const [base64Img, setBase64Img] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formRef = useRef(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = () => {
    const reader = new FileReader();
    const file = fileRef.current?.files && fileRef.current.files[0];

    if (
      file &&
      (file.type === FileFormats.JPEG ||
        file.type === FileFormats.JPG ||
        file.type === FileFormats.PNG)
    ) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64Img(reader.result as string);
      };
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      const values: FormInterface = {
        name: form.get('name')?.toString() || '',
        age: form.get('age')?.toString() || '',
        country: form.get('country')?.toString() || '',
        email: form.get('email')?.toString() || '',
        password: form.get('password')?.toString() || '',
        passwordConfirmation: form.get('passwordConfirmation')?.toString() || '',
        gender: form.get('gender')?.toString() || '',
        file: fileRef.current!.files!,
        agreement: Boolean(form.get('agreement')),
      };

      formSchema.validateSync(values, { abortEarly: false });

      handleChangeFile();

      const serializedData: Omit<FormInterface, 'file'> = {
        name: form.get('name')?.toString() || '',
        age: form.get('age')?.toString() || '',
        country: form.get('country')?.toString() || '',
        email: form.get('email')?.toString() || '',
        password: form.get('password')?.toString() || '',
        passwordConfirmation: form.get('passwordConfirmation')?.toString() || '',
        gender: form.get('gender')?.toString() || '',
        agreement: Boolean(form.get('agreement')),
      };

      dispatch(FormSlice.actions.updateForm({ data: serializedData, base64Img }));

      setTimeout(() => {
        navigation('/');
      }, 1000);
    } catch (validationError) {
      const fieldErrors: Record<string, string> = {};

      if (validationError instanceof yup.ValidationError) {
        validationError.inner.forEach((error) => {
          if (error.path && !fieldErrors[error.path]) {
            fieldErrors[error.path] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <UncontrolledInputComponent name="name" labelText="Name" type="text" errors={errors.name} />

      <UncontrolledInputComponent name="age" labelText="Age" type="number" errors={errors.age} />

      <div className={styles.input_container}>
        <div className={styles.input_content}>
          <label htmlFor="gender">Gender: </label>
          <select defaultValue="" name="gender" placeholder="Select Gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <p className={styles.input_error}>{errors.gender}</p>
      </div>

      <SelectionComponent name="country" error={errors.country} />

      <UncontrolledInputComponent
        name="email"
        labelText="E-mail"
        type="email"
        placeholder="example@email.com"
        errors={errors.email}
      />

      <UncontrolledInputComponent
        name="password"
        labelText="Password"
        type="password"
        security="true"
        errors={errors.password}
      />

      <UncontrolledInputComponent
        name="passwordConfirmation"
        labelText="Repeat password"
        type="password"
        security="true"
        errors={errors.passwordConfirmation}
      />

      <div className={styles.input_container}>
        <div className={styles.input_content}>
          <label htmlFor="file">Upload file: </label>
          <input
            className={styles.input}
            ref={fileRef}
            onChange={handleChangeFile}
            type="file"
            name="file"
          />
        </div>
        <p className={styles.input_error}>{errors.file}</p>
      </div>

      <UncontrolledInputComponent
        name="agreement"
        labelText="By checking this box, you are agreeing to our terms of service"
        type="checkbox"
        defaultValue="false"
        errors={errors.agreement}
      />

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default UncontrolledComponent;

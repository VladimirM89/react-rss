import React, { FormEvent, useRef, useState } from 'react';
import { FileFormats, FormInterface } from '../../types/FormTypes';
import { formSchema } from '../../utils/FormSchema';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { FormSlice } from '../../store/features/forms/FormSlice';
import SelectionComponent from '../SelectionComponent/SelectionComponent';

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
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" defaultValue="" />
        <p>{errors.name}</p>
      </div>

      <div>
        <label htmlFor="age">Age </label>
        <input type="number" name="age" />
        <p>{errors.age}</p>
      </div>

      <div>
        <label htmlFor="gender">Gender: </label>
        <select defaultValue="" name="gender" placeholder="Select Gender">
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p>{errors.gender}</p>
      </div>

      <SelectionComponent name="country" error={errors.country} />

      <div>
        <label htmlFor="email">E-mail: </label>
        <input type="email" name="email" placeholder="example@email.com" />
        <p>{errors.email}</p>
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" security="true" />
        <p>{errors.password}</p>
      </div>

      <div>
        <label htmlFor="passwordConfirmation">Repeat password: </label>
        <input type="password" name="passwordConfirmation" security="true" />
        <p>{errors.passwordConfirmation}</p>
      </div>

      <div>
        <label htmlFor="file">Choose file to upload: </label>
        <input ref={fileRef} onChange={handleChangeFile} type="file" name="file" />
        <p>{errors.file}</p>
      </div>

      <div>
        <label htmlFor="agreement">T&C: </label>
        <input type="checkbox" id="agreement" name="agreement" />
        <p>{errors.agreement}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;

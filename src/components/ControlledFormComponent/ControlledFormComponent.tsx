import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../utils/FormSchema';
import { FileFormats, FormInterface } from '../../types/FormTypes';
import { FormSlice } from '../../store/features/forms/FormSlice';
import { useAppDispatch } from '../../hooks/redux';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectionComponent from '../SelectionComponent/SelectionComponent';

const ControlledFormComponent = () => {
  const [base64Img, setBase64Img] = useState('');

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = event.target.files && event.target.files[0];

    if (
      file &&
      (file.type === FileFormats.JPEG ||
        file.type === FileFormats.JPG ||
        file.type === FileFormats.PNG)
    ) {
      reader.readAsDataURL(file);
      reader.onloadend = () => setBase64Img(reader.result as string);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormInterface>({ mode: 'onChange', resolver: yupResolver(formSchema) });

  const onSubmit = (data: FormInterface) => {
    const resultData: Omit<FormInterface, 'file'> = {
      name: data.name,
      age: data.age,
      country: data.country,
      email: data.email,
      password: data.password,
      gender: data.gender,
      agreement: false,
      passwordConfirmation: data.passwordConfirmation,
    };

    dispatch(FormSlice.actions.updateForm({ data: resultData, base64Img }));

    setTimeout(() => {
      navigation('/');
      reset();
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <div>
        <label htmlFor="name">Name </label>
        <input {...register('name')} type="text" name="name" />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label htmlFor="age">Age </label>
        <input {...register('age')} type="number" name="age" />
        <p>{errors.age?.message}</p>
      </div>

      <div>
        <label htmlFor="gender">Gender: </label>
        <select {...register('gender')} defaultValue="" name="gender" placeholder="Select Gender">
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p>{errors.gender?.message}</p>
      </div>

      <SelectionComponent
        register={register}
        name="country"
        error={errors.country?.message || ''}
      />

      <div>
        <label htmlFor="email">E-mail </label>
        <input {...register('email')} type="email" name="email" placeholder="example@email.com" />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label htmlFor="password">Password </label>
        <input {...register('password')} type="password" name="password" security="true" />
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <label htmlFor="passwordConfirmation">Repeat password </label>
        <input
          {...register('passwordConfirmation')}
          type="password"
          name="passwordConfirmation"
          security="true"
        />
        <p>{errors.passwordConfirmation?.message}</p>
      </div>

      <div>
        <label htmlFor="file">Choose file to upload:</label>
        <input {...register('file')} onChange={handleChangeFile} type="file" name="file" />
        <p>{errors.file?.message}</p>
      </div>
      <div>
        <label htmlFor="agreement">T&C</label>
        <input {...register('agreement')} type="checkbox" id="agreement" name="agreement" />
        <p>{errors.agreement?.message}</p>
      </div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default ControlledFormComponent;

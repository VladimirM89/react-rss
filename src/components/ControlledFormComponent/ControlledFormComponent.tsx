import { Controller, useForm } from 'react-hook-form';
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
    setValue,
    control,
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
      <Controller
        name="name"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <label htmlFor={field.name}>Name: </label>
            <input type="text" {...field} />
            <p>{errors.name?.message}</p>
          </div>
        )}
      />

      {/* 
      <div>
        <label htmlFor="name">Name </label>
        <input {...register('name')} type="text" name="name" />
        <p>{errors.name?.message}</p>
      </div> */}

      <Controller
        name="age"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <label htmlFor={field.name}>Age: </label>
            <input type="number" {...field} />
            <p>{errors.age?.message}</p>
          </div>
        )}
      />

      {/* <div>
        <label htmlFor="age">Age </label>
        <input {...register('age')} type="number" name="age" />
        <p>{errors.age?.message}</p>
      </div> */}

      <Controller
        name="gender"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <label htmlFor={field.name}>Gender: </label>
            <select {...field} placeholder="Select Gender">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p>{errors.gender?.message}</p>
          </div>
        )}
      />

      {/* <div>
        <label htmlFor="gender">Gender: </label>
        <select {...register('gender')} defaultValue="" name="gender" placeholder="Select Gender">
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p>{errors.gender?.message}</p>
      </div> */}

      <SelectionComponent
        register={register}
        setValue={setValue}
        name="country"
        error={errors.country?.message || ''}
      />

      <Controller
        name="email"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <label htmlFor={field.name}>E-mail: </label>
            <input type="email" {...field} placeholder="example@email.com" />
            <p>{errors.email?.message}</p>
          </div>
        )}
      />

      {/* <div>
        <label htmlFor="email">E-mail </label>
        <input {...register('email')} type="email" name="email" placeholder="example@email.com" />
        <p>{errors.email?.message}</p>
      </div> */}

      <Controller
        name="password"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <label htmlFor={field.name}>Password: </label>
            <input type="password" {...field} security="true" />
            <p>{errors.password?.message}</p>
          </div>
        )}
      />

      {/* <div>
        <label htmlFor="password">Password </label>
        <input {...register('password')} type="password" name="password" security="true" />
        <p>{errors.password?.message}</p>
      </div> */}

      <Controller
        name="passwordConfirmation"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <label htmlFor={field.name}>Repeat password: </label>
            <input type="password" {...field} security="true" />
            <p>{errors.passwordConfirmation?.message}</p>
          </div>
        )}
      />

      {/* <div>
        <label htmlFor="passwordConfirmation">Repeat password </label>
        <input
          {...register('passwordConfirmation')}
          type="password"
          name="passwordConfirmation"
          security="true"
        />
        <p>{errors.passwordConfirmation?.message}</p>
      </div> */}

      <Controller
        name="file"
        control={control}
        render={({ field: { onChange } }) => (
          <>
            <label htmlFor="file">Choose file to upload:</label>
            <input
              onChange={(event) => {
                handleChangeFile(event);
                onChange(event.target.files);
              }}
              type="file"
              name="file"
            />
            <p>{errors.file?.message}</p>
          </>
        )}
      />
      {/*
      <div>
        <label htmlFor="file">Choose file to upload:</label>
        <input {...register('file')} onChange={handleChangeFile} type="file" name="file" />
        <p>{errors.file?.message}</p>
      </div> */}

      <Controller
        name="agreement"
        control={control}
        defaultValue={false}
        render={({ field: { name, ref, onChange } }) => (
          <div>
            <label htmlFor={name}>T&C: </label>
            <input type="checkbox" name={name} ref={ref} onChange={onChange} id="agreement" />
            <p>{errors.agreement?.message}</p>
          </div>
        )}
      />

      {/* <div>
        <label htmlFor="agreement">T&C</label>
        <input {...register('agreement')} type="checkbox" id="agreement" name="agreement" />
        <p>{errors.agreement?.message}</p>
      </div> */}

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default ControlledFormComponent;

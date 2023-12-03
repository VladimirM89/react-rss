import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../utils/FormSchema';
import { FileFormats, FormInterface } from '../../types/FormTypes';
import { FormSlice } from '../../store/features/forms/FormSlice';
import { useAppDispatch } from '../../hooks/redux';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectionComponent from '../SelectionComponent/SelectionComponent';
import styles from './ControlledFormComponent.module.scss';

const ControlledFormComponent = () => {
  const [base64Img, setBase64Img] = useState('');

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
    control,
  } = useForm<FormInterface>({ mode: 'onChange', resolver: yupResolver(formSchema) });

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Controller
        name="name"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div className={styles.input_container}>
            <div className={styles.input_content}>
              <label htmlFor={field.name}>Name: </label>
              <input className={styles.input} type="text" {...field} />
            </div>
            <p className={styles.input_error}>{errors.name?.message}</p>
          </div>
        )}
      />

      <Controller
        name="age"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div className={styles.input_container}>
            <div className={styles.input_content}>
              <label htmlFor={field.name}>Age: </label>
              <input className={styles.input} type="number" {...field} />
            </div>
            <p className={styles.input_error}>{errors.age?.message}</p>
          </div>
        )}
      />

      <Controller
        name="gender"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div className={styles.input_container}>
            <div className={styles.input_content}>
              <label htmlFor={field.name}>Gender: </label>
              <select {...field} placeholder="Select Gender">
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <p className={styles.input_error}>{errors.gender?.message}</p>
          </div>
        )}
      />

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
          <div className={styles.input_container}>
            <div className={styles.input_content}>
              <label htmlFor={field.name}>E-mail: </label>
              <input
                className={styles.input}
                type="email"
                {...field}
                placeholder="example@email.com"
              />
            </div>
            <p className={styles.input_error}>{errors.email?.message}</p>
          </div>
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div className={styles.input_container}>
            <div className={styles.input_content}>
              <label htmlFor={field.name}>Password: </label>
              <input className={styles.input} type="password" {...field} security="true" />
            </div>
            <p className={styles.input_error}>{errors.password?.message}</p>
          </div>
        )}
      />

      <Controller
        name="passwordConfirmation"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div className={styles.input_container}>
            <div className={styles.input_content}>
              <label htmlFor={field.name}>Repeat password: </label>
              <input className={styles.input} type="password" {...field} security="true" />
            </div>
            <p className={styles.input_error}>{errors.passwordConfirmation?.message}</p>
          </div>
        )}
      />

      <Controller
        name="file"
        control={control}
        render={({ field: { onChange } }) => (
          <div className={styles.input_container}>
            <div className={styles.input_content}>
              <label htmlFor="file">Upload file:</label>
              <input
                className={styles.input}
                onChange={(event) => {
                  handleChangeFile(event);
                  onChange(event.target.files);
                }}
                type="file"
                name="file"
              />
            </div>
            <p>{errors.file?.message}</p>
          </div>
        )}
      />

      <Controller
        name="agreement"
        control={control}
        defaultValue={false}
        render={({ field: { name, ref, onChange } }) => (
          <div className={styles.input_container}>
            <div className={styles.input_checkbox}>
              <input
                className={styles.input}
                type="checkbox"
                name={name}
                ref={ref}
                onChange={onChange}
                id="agreement"
              />
              <label htmlFor={name}>
                By checking this box, you are agreeing to our terms of service
              </label>
            </div>
            <p className={styles.input_error}>{errors.agreement?.message}</p>
          </div>
        )}
      />

      <button className={'btn'} type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default ControlledFormComponent;

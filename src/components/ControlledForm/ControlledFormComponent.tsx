import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../utils/FormSchema';
import * as yup from 'yup';

type FormInterface = yup.InferType<typeof formSchema>;

const ControlledFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInterface>({ mode: 'onChange', resolver: yupResolver(formSchema) });

  const onSubmit = (data: FormInterface) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <div>
        <label htmlFor="name">Name </label>
        <input {...register('name')} type="text" />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label htmlFor="age">Age </label>
        <input {...register('age')} type="number" />
        <p>{errors.age?.message}</p>
      </div>

      <div>
        <label htmlFor="gender">Gender: </label>
        <select {...register('gender')} defaultValue="" placeholder="Select Gender">
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label htmlFor="country">Country: </label>
        <input {...register('country')} type="text" autoComplete="true" />
        <p>{errors.country?.message}</p>
      </div>

      <div>
        <label htmlFor="email">E-mail </label>
        <input {...register('email')} type="email" placeholder="example@email.com" />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label htmlFor="password">Password </label>
        <input {...register('password')} type="password" security="true" />
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <label htmlFor="passwordConfirmation">Repeat password </label>
        <input {...register('passwordConfirmation')} type="password" security="true" />
        <p>{errors.passwordConfirmation?.message}</p>
      </div>

      <div>
        <label htmlFor="file">Choose file to upload:</label>
        <input {...register('file')} type="file" name="file" />
        <p>{errors.file?.message}</p>
      </div>
      <div>
        <label htmlFor="agreement">T&C</label>
        <input {...register('agreement')} type="checkbox" id="agreement" />
        <p>{errors.agreement?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledFormComponent;

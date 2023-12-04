import * as yup from 'yup';
import { formSchema } from '../utils/FormSchema';

export type FormInterface = yup.InferType<typeof formSchema>;

export enum FileFormats {
  JPEG = 'image/jpeg',
  JPG = 'image/jpg',
  PNG = 'image/png',
}

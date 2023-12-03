import { FC } from 'react';
import styles from './UncontrolledInputComponent.module.scss';

type UncontrolledInputComponentType = {
  name: string;
  labelText: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  security?: string;
  errors: string;
};

const UncontrolledInputComponent: FC<UncontrolledInputComponentType> = ({
  name,
  labelText,
  type,
  placeholder,
  defaultValue,
  security,
  errors,
}) => {
  return (
    <div className={styles.input_container}>
      <div className={type !== 'checkbox' ? styles.input_content : styles.input_checkbox}>
        <label style={{ order: type !== 'checkbox' ? 0 : 1 }} htmlFor={name}>
          {labelText}:{' '}
        </label>
        <input
          className={styles.input}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder && ''}
          defaultValue={type !== 'checkbox' ? defaultValue : 'false'}
          security={security && ''}
        />
      </div>
      <p className={styles.input_error}>{errors}</p>
    </div>
  );
};

export default UncontrolledInputComponent;

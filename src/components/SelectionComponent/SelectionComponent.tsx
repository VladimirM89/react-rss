import { ChangeEvent, FC, MouseEvent, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './SelectionComponent.module.scss';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormInterface } from '../../types/FormTypes';

type SelectionComponentType = {
  name: string;
  register?: UseFormRegister<FormInterface> | null;
  error?: string | null;
  setValue?: UseFormSetValue<FormInterface> | null;
};

const SelectionComponent: FC<SelectionComponentType> = ({ name, register, error, setValue }) => {
  const { data } = useAppSelector((state) => state.countries);

  const [display, setDisplay] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const listRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setInputValue(value);
    setDisplay(false);
    if (setValue) {
      setValue(name as 'country', value, { shouldValidate: true });
    }
  };

  const handleType = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setDisplay(true);
    if (setValue) {
      setValue(name as 'country', event.target.value, { shouldValidate: true });
    }
  };

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (listRef.current && !listRef.current.contains(event.target as Node)) {
      setDisplay(false);
    }
  };

  return (
    <div>
      <div className={display ? 'overlay' : 'hidden'} onClick={handleOutsideClick}></div>
      <div className={styles.content_wrapper} ref={listRef}>
        <label htmlFor={name}>Country: </label>
        <input
          {...(register && { ...register(name as 'country') })}
          name={name}
          value={inputValue}
          autoComplete="true"
          onClick={() => setDisplay(!display)}
          onChange={handleType}
        />
        <div className={styles.list_container} style={{ display: display ? 'block' : 'none' }}>
          {display &&
            data
              .filter((item) => item.name.indexOf(inputValue) > -1)
              .map((country) => {
                return (
                  <p
                    className={styles.cursor}
                    key={country.code}
                    onClick={() => handleSelect(country.name)}
                  >
                    {country.name}
                  </p>
                );
              })}
        </div>
      </div>
      <p>{error}</p>
    </div>
  );
};

export default SelectionComponent;

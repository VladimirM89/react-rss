import { FC, useEffect, useState } from 'react';
import { InitialStateType } from '../../store/features/forms/FormSlice';
import styles from './ResultFormData.module.scss';

type ResultFormDataProps = {
  data: Array<InitialStateType>;
};

const ResultFormData: FC<ResultFormDataProps> = ({ data }) => {
  const [highlighting, setHighlighting] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setHighlighting(false);
    }, 3000);
  }, [data]);

  const showUi = () => {
    if (data.length === 1) {
      return (
        <div>
          <p className={highlighting ? styles.changed : ''}>{data[0].name}</p>
          <p className={highlighting ? styles.changed : ''}>{data[0].age}</p>
          <p className={highlighting ? styles.changed : ''}>{data[0].gender}</p>
          <p className={highlighting ? styles.changed : ''}>{data[0].country}</p>
          <p className={highlighting ? styles.changed : ''}>{data[0].email}</p>
          <img
            src={data[0].file}
            alt={data[0].name}
            width={200}
            className={highlighting ? styles.changed : ''}
          />
          <p className={highlighting ? styles.changed : ''}>{data[0].password}</p>
        </div>
      );
    }
    if (data.length === 2) {
      return (
        <div>
          <p className={data[0].name !== data[1].name && highlighting ? styles.changed : ''}>
            {data[0].name !== data[1].name ? data[1].name : data[0].name}
          </p>
          <p className={data[0].age !== data[1].age && highlighting ? styles.changed : ''}>
            {data[0].age !== data[1].age ? data[1].age : data[0].age}
          </p>
          <p className={data[0].gender !== data[1].gender && highlighting ? styles.changed : ''}>
            {data[0].gender !== data[1].gender ? data[1].gender : data[0].gender}
          </p>
          <p className={data[0].country !== data[1].country && highlighting ? styles.changed : ''}>
            {data[0].country !== data[1].country ? data[1].country : data[0].country}
          </p>
          <p className={data[0].email !== data[1].email && highlighting ? styles.changed : ''}>
            {data[0].email !== data[1].email ? data[1].email : data[0].email}
          </p>
          <img
            src={data[0].file !== data[1].file ? data[1].file : data[0].file}
            alt={data[0].name !== data[1].name ? data[1].name : data[0].name}
            width={200}
            className={data[0].file !== data[1].file && highlighting ? styles.changed : ''}
          />
          <p
            className={data[0].password !== data[1].password && highlighting ? styles.changed : ''}
          >
            {data[0].password !== data[1].password ? data[1].password : data[0].password}
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      {data.length ? (
        <>
          <h3>Entered data</h3>
          <div>{showUi()}</div>
        </>
      ) : (
        <p>No entered data</p>
      )}
    </div>
  );
};

export default ResultFormData;

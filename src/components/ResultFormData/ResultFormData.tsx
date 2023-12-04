import { FC, useEffect, useState } from 'react';
import { InitialStateType } from '../../store/features/forms/FormSlice';
import styles from './ResultFormData.module.scss';

type ResultFormDataProps = {
  data: Array<InitialStateType>;
};

type DataChangedType = {
  data: string;
  isChanged: boolean;
};

type RenderDataType = {
  name: DataChangedType;
  age: DataChangedType;
  country: DataChangedType;
  email: DataChangedType;
  password: DataChangedType;
  gender: DataChangedType;
  file: DataChangedType;
  agreement: DataChangedType;
};

const ResultFormData: FC<ResultFormDataProps> = ({ data }) => {
  const [highlighting, setHighlighting] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setHighlighting(false);
    }, 3000);
  }, []);

  const getRenderData = () => {
    let renderedData: RenderDataType = {
      name: {
        data: '',
        isChanged: false,
      },
      age: {
        data: '',
        isChanged: false,
      },
      country: {
        data: '',
        isChanged: false,
      },
      email: {
        data: '',
        isChanged: false,
      },
      password: {
        data: '',
        isChanged: false,
      },
      gender: {
        data: '',
        isChanged: false,
      },
      file: {
        data: '',
        isChanged: false,
      },
      agreement: {
        data: '',
        isChanged: false,
      },
    };
    if (data.length === 1) {
      renderedData = {
        name: { data: data[0].name, isChanged: true },
        age: { data: data[0].age, isChanged: true },
        gender: { data: data[0].gender, isChanged: true },
        country: { data: data[0].country, isChanged: true },
        email: { data: data[0].email, isChanged: true },
        password: { data: data[0].password, isChanged: true },
        file: { data: data[0].file, isChanged: true },
        agreement: { data: String(data[0].agreement), isChanged: true },
      };
    }
    if (data.length === 2) {
      renderedData = {
        name: {
          data: data[0].name !== data[1].name ? data[1].name : data[0].name,
          isChanged: data[0].name !== data[1].name,
        },
        age: {
          data: data[0].age !== data[1].age ? data[1].age : data[0].age,
          isChanged: data[0].age !== data[1].age,
        },
        gender: {
          data: data[0].gender !== data[1].gender ? data[1].gender : data[0].gender,
          isChanged: data[0].gender !== data[1].gender,
        },
        country: {
          data: data[0].country !== data[1].country ? data[1].country : data[0].country,
          isChanged: data[0].country !== data[1].country,
        },
        email: {
          data: data[0].email !== data[1].email ? data[1].email : data[0].email,
          isChanged: data[0].email !== data[1].email,
        },
        password: {
          data: data[0].password !== data[1].password ? data[1].password : data[0].password,
          isChanged: data[0].password !== data[1].password,
        },
        file: {
          data: data[0].file !== data[1].file ? data[1].file : data[0].file,
          isChanged: data[0].file !== data[1].file,
        },
        agreement: {
          data:
            data[0].agreement !== data[1].agreement
              ? String(data[1].agreement)
              : String(data[0].agreement),
          isChanged: data[0].agreement !== data[1].agreement,
        },
      };
    }
    return (
      <div className={styles.container}>
        <div className={renderedData.name.isChanged && highlighting ? styles.changed : ''}>
          <span>Name: </span>
          <span>{renderedData.name.data}</span>
        </div>

        <div className={renderedData.age.isChanged && highlighting ? styles.changed : ''}>
          <span>Age: </span>
          <span>{renderedData.age.data}</span>
        </div>

        <div className={renderedData.gender.isChanged && highlighting ? styles.changed : ''}>
          <span>Gender: </span>
          <span>{renderedData.gender.data}</span>
        </div>

        <div className={renderedData.country.isChanged && highlighting ? styles.changed : ''}>
          <span>Country: </span>
          <span>{renderedData.country.data}</span>
        </div>

        <div className={renderedData.email.isChanged && highlighting ? styles.changed : ''}>
          <span>E-mail: </span>
          <span>{renderedData.email.data}</span>
        </div>

        <div className={renderedData.password.isChanged && highlighting ? styles.changed : ''}>
          <span>Password: </span>
          <span>{renderedData.password.data}</span>
        </div>

        <div className={renderedData.file.isChanged && highlighting ? styles.changed : ''}>
          <span>Uploaded image: </span>
          <img src={renderedData.file.data} alt={renderedData.name.data} width={200} />
        </div>

        <div className={renderedData.agreement.isChanged && highlighting ? styles.changed : ''}>
          <span>Agree with term & conditions: </span>
          <span>{renderedData.agreement.data}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      {data.length ? (
        <>
          <h3 className={styles.title}>Entered data</h3>
          {getRenderData()}
        </>
      ) : (
        <h3>No entered data</h3>
      )}
    </>
  );
};

export default ResultFormData;

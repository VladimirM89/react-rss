import { useAppSelector } from '../../../hooks/redux';
import ResultFormData from '../../../components/ResultFormData/ResultFormData';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const formData = useAppSelector((state) => state.controlledForm);

  return (
    <div className={styles.result_content}>
      <ResultFormData data={formData} />
    </div>
  );
};

export default MainPage;

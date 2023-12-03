import { useAppSelector } from '../../../hooks/redux';
import ResultFormData from '../../../components/ResultFormData/ResultFormData';

const MainPage = () => {
  const formData = useAppSelector((state) => state.controlledForm);

  return (
    <div>
      <ResultFormData data={formData} />
    </div>
  );
};

export default MainPage;

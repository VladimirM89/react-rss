import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import ResultFormData from '../../../components/ResultFormData/ResultFormData';

const MainPage = () => {
  const formData = useAppSelector((state) => state.controlledForm);

  return (
    <div>
      <nav>
        <NavLink to="/controlledForm">Controlled Form</NavLink>
        <NavLink to="/uncontrolledForm">Unontrolled Form</NavLink>
      </nav>
      <ResultFormData data={formData} />
    </div>
  );
};

export default MainPage;

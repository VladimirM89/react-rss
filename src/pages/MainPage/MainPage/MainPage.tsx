import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { CountriesSlice } from '../../../store/features/forms/CountriesSlice';
import { countriesList } from '../../../utils/countriesList';

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(CountriesSlice.actions.setCountries(countriesList));
  });
  return (
    <div>
      <nav>
        <NavLink to="/controlledForm">Controlled Form</NavLink>
        <NavLink to="/uncontrolledForm">Unontrolled Form</NavLink>
      </nav>
    </div>
  );
};

export default MainPage;

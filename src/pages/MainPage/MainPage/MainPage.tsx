import { NavLink } from 'react-router-dom';

const MainPage = () => {
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

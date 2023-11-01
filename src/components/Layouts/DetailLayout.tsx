import { NavLink, Outlet } from 'react-router-dom';

export const DetailLayout = () => {
  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptate!</p>
      <NavLink to={'1'}>To card 1</NavLink>
      <NavLink to={'2'}>To card 2</NavLink>
      <Outlet />
    </>
  );
};

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <div>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={buildCssClasses} to="/login">
        Login
      </NavLink>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>

      <NavLink className={buildCssClasses} to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Navigation;

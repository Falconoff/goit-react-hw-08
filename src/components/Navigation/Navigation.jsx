import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import {
  selectUserIsLoggedIn,
  selectUserData,
} from '../../redux/auth/selectors';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const userData = useSelector(selectUserData);

  return (
    <nav className={css.nav}>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/about">
        About
      </NavLink>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>

      {isLoggedIn ? (
        <div>
          <span>Hello, {userData.name}</span>
          <button type="button">Logout</button>
        </div>
      ) : (
        <>
          <NavLink className={buildCssClasses} to="/register">
            Register
          </NavLink>
          <NavLink className={buildCssClasses} to="/login">
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserIsLoggedIn,
  selectUserData,
} from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(logout());
    console.log('click on logout');
  };

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
          <button type="button" onClick={onLogout}>
            Logout
          </button>
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

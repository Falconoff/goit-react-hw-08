import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import { logout } from '../../redux/auth/operations';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const userData = useSelector(selectUser);

  // const onLogout = () => {
  //   dispatch(logout());
  //   console.log('click on logout');
  // };

  return (
    <nav className={css.nav}>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        // <div>
        //   <span>Hello, {userData.name}</span>
        //   <button type="button" onClick={onLogout}>
        //     Logout
        //   </button>
        // </div>
        // <>
        //   <NavLink className={buildCssClasses} to="/register">
        //     Register
        //   </NavLink>
        //   <NavLink className={buildCssClasses} to="/login">
        //     Login
        //   </NavLink>
        // </>
        <AuthNav />
      )}
    </nav>
  );
};

export default Navigation;

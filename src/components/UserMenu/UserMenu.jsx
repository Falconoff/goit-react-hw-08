import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
    console.log('click on logout');
  };

  return (
    <div>
      <span>Hello, {userData.name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

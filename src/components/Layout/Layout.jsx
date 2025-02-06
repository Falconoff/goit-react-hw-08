import AppBar from '../AppBar/AppBar';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <div className={css.container}>{children}</div>
    </div>
  );
};

export default Layout;

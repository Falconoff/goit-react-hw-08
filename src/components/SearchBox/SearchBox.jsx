import { useDispatch, useSelector } from 'react-redux';

import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleSearch = evt => {
    const searchValue = evt.target.value;
    dispatch(changeFilter(searchValue));
  };

  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;

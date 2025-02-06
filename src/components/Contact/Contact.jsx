import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa6';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <div className={css.data}>
        <div className={css.data_row}>
          <FaUser className={css.icon} />
          <span className={css.data_name}>{name}</span>
        </div>
        <div className={css.data_row}>
          <FaPhone className={css.icon} />
          <span className={css.data_phone}>{number}</span>
        </div>
      </div>

      <div className={css.options}>
        <button type="button" className={css.btn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;

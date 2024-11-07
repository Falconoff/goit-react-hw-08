import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa6';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.data}>
        <p>
          <FaUser className={css.icon} />
          Name: {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          Phone: {number}
        </p>
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

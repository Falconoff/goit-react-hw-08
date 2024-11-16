import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}

      {error && (
        <p>
          Oops, some error occured &quot;{error}&quot;. Please, try again later
        </p>
      )}

      {Array.isArray(contacts) && contacts.length === 0 && (
        <p>There are no contacts in your phonebook yet!</p>
      )}

      {Array.isArray(contacts) && contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;

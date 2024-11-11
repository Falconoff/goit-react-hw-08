import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik, ErrorMessage } from 'formik';

import { addContact } from '../../redux/contacts/operations';
import { contactSchema } from '../../utils/schemas';

import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          {/*  можна було просто огорнути все в label та не використовувати id,
         але просто треба більше практики)) */}
          <label htmlFor={nameId}>
            <p>Name</p>
          </label>
          <Field className={css.input} id={nameId} name="name" type="text" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.wrapper}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.input}
            id={numberId}
            name="number"
            type="text"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

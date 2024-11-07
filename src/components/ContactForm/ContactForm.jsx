import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';

import { addContact } from '../../redux/contactsOps';

import css from './ContactForm.module.css';

const contactSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Too short!')
    .max(50, 'Too long!'),
  number: Yup.string()
    .required('Number is required')
    .min(3, 'Too short!')
    .max(50, 'Too long!'),
});

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

import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik, ErrorMessage } from 'formik';

import { addContact } from '../../redux/contacts/operations';
import { registrationSchema } from '../../utils/schemas';

import css from './RegistrationForm.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  // const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const passId = useId();

  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    // dispatch(addContact({ ...values }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={registrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          {/*  можна було просто огорнути все в label та не використовувати id,
         але просто треба більше практики)) */}
          <label htmlFor={nameId}>
            <p>Name</p>
          </label>
          <Field
            className={css.input}
            id={nameId}
            name="name"
            type="text"
            placeholder="John Johnson"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.wrapper}>
          <label htmlFor={numberId}>Email</label>
          <Field
            className={css.input}
            id={numberId}
            name="email"
            type="text"
            placeholder="example@mail.com"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.wrapper}>
          <label htmlFor={passId}>Password</label>
          <Field
            className={css.input}
            id={passId}
            name="password"
            type="password"
            placeholder="your password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <button className={css.btn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

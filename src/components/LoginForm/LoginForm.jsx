import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik, ErrorMessage } from 'formik';

import { login } from '../../redux/auth/operations';
import { loginSchema } from '../../utils/schemas';

import css from './LoginForm.module.css';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  // const nameId = useId();
  const numberId = useId();
  const passId = useId();

  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    // dispatch(addContact({ ...values }));
    dispatch(login(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from 'components/Button/Button.styled';
import { Form, Label, ErrorMessage } from 'components/Formik/Formik.styled';

/* Схема валідації */
const ContactSchema = Yup.object().shape({
  email: Yup.string('Must be a string')
    .email('Enter a valid email')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string('Must be a string')
    .min(6, 'Password must contain minimum 6 symbols')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <Label htmlFor="email">Email</Label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div"></ErrorMessage>
        <Label htmlFor="password">Password</Label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div"></ErrorMessage>
        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
};

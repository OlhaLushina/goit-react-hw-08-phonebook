import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'components/Button/Button.styled';
import { Form, Label, ErrorMessage } from 'components/Formik/Formik.styled';

/* Схема валідації */
const ContactSchema = Yup.object().shape({
  name: Yup.string('Must be a string')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string('Must be a string')
    .email('Enter a valid email')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string('Must be a string')
    .min(6, 'Password must contain minimum 6 symbols')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <Label htmlFor="name">Name</Label>
        <Field name="name" />
        <ErrorMessage name="name" component="div"></ErrorMessage>
        <Label htmlFor="email">Email</Label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div"></ErrorMessage>
        <Label htmlFor="password">Password</Label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div"></ErrorMessage>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};

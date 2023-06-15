import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Label, ErrorMessage } from 'components/Formik/Formik.styled';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { Button } from 'components/Button/Button.styled';

/* Схема валідації */
const ContactSchema = Yup.object().shape({
  name: Yup.string('Must be a string')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string('Must be a string')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .max(50, 'Too Long!')
    .required('Required'),
});

/* Компонент ContactForm */
export const ContactFormEdit = ({ closeModal, contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  /* Редагування контакту */
  const handleSubmit = newContact => {
    dispatch(editContact(newContact));
    closeModal(); // закриваємо модальне вікно
  };

  return (
    <>
      <h2>Edit contact</h2>
      <Formik
        initialValues={{ name, number }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          handleSubmit({ id, ...values });
          actions.resetForm();
        }}
      >
        <Form>
          <Label htmlFor="name">Name</Label>
          <Field name="name" />
          <ErrorMessage name="name" component="div"></ErrorMessage>
          <Label htmlFor="number">Number</Label>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div"></ErrorMessage>
          <Button type="submit">Save contact</Button>
        </Form>
      </Formik>
    </>
  );
};

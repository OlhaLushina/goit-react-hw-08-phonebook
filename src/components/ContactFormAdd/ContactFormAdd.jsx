import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Label, ErrorMessage } from 'components/Formik/Formik.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';
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
export const ContactFormAdd = ({ closeModal }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  /* Додавання контакту */
  const handleSubmit = newContact => {
    if (
      contacts.filter(
        item =>
          item.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      ).length > 0
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    closeModal(); // закриваємо модальне вікно
  };

  return (
    <>
      <h2>Add new contact</h2>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          handleSubmit({ ...values });
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
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

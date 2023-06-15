import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, Info, Buttons } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { ContactFormEdit } from 'components/ContactFormEdit/ContactFormEdit';
import { useState } from 'react';
import { Button } from 'components/Button/Button.styled';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Відкрити модальне вікно */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /* Закрити модальне вікно */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Item>
      <Info>
        {name} {number}{' '}
      </Info>
      <Buttons>
        <Button onClick={openModal}>Edit</Button>
        <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
      </Buttons>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ContactFormEdit closeModal={closeModal} contact={contact} />
        </Modal>
      )}
    </Item>
  );
};

/* Опис типів props */
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

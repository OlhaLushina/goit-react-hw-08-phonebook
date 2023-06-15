import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
import { ContactFormAdd } from 'components/ContactFormAdd/ContactFormAdd';
import { useState } from 'react';
import { Button } from 'components/Button/Button.styled';

const Contacts = () => {
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
    <>
      <h2>Contacts</h2>
      <Filter />
      <Button onClick={openModal}>Add Contact</Button>
      <ContactList />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ContactFormAdd closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Contacts;

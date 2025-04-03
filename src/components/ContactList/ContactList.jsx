import React from 'react';
import Contact from '../Contact/Contact';
import st from './ContactList.module.css';

const ContactList = ({ contactList, onDelete }) => {
  //   console.log(filteredContacts);
  return (
    <>
      <ul className={st.listOfContacts}>
        {contactList.map(contact => (
          <Contact key={contact.id} contactdata={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;

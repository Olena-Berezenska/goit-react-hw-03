import ContactForm from './components/ContactForm/ContactForm ';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';
import initialContacts from '../src/assets/initialContacts.json';
const App = () => {
  const [contacts, setcontacts] = useState(() => {
    const SavedState = window.localStorage.getItem('contactsState');
    return SavedState !== null ? JSON.parse(SavedState) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactsState', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeImput = e => {
    setFilter(e.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const addContact = newContact => {
    setcontacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setcontacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onChange={handleChangeImput} inpValue={filter} />
      <ContactList contactList={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;

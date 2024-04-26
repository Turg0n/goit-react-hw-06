import { useState, useEffect } from 'react';
import phoneContacts from '../App/App-contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const KEY = 'save-contact';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(KEY)) ?? phoneContacts;
  });
  const [filter, setFilter] = useState('');
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  // Додавання
  function addContact(newContact) {
    setContacts(prevContacts => [...prevContacts, newContact]);
  }
  // Видалення
  function deleteContact(contactId) {
    setContacts(prevContacts =>
      prevContacts.filter(prevContact => prevContact.id !== contactId)
    );
  }
  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox state={filter} setState={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}
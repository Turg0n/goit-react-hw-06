import Contact from '../Contact/Contact';
import css from './ContactList.module.css';


export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact contact={contact} onDelete={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
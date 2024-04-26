import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactListItemWrapper}>
      <div>
        <p className={css.userInfo}>
          <FaUser size={20} color='#4d5ae5' /> {name}
        </p>
        <p className={css.userInfo}>
          <FaPhone size={20} color='#4d5ae5' /> {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
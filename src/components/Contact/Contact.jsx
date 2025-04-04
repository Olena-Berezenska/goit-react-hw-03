import { FaUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ contactdata, onDelete }) => {
  console.log(contactdata);
  return (
    <li className={s.contactBox}>
      <div className={s.contactInfo}>
        <p>
          <FaUser /> {contactdata.name}
        </p>
        <p>
          <FaPhone /> {contactdata.number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => onDelete(contactdata.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from './createSlice';

export function Contacts() {
  const contactsUser = useSelector(getContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contactsUser.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            {'  '}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => onDeleteContact(id)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

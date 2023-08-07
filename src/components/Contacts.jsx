import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './store';

export function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number, id }) => (
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

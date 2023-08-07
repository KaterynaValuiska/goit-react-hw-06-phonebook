import FormRegistation from './FormRegistation';
// import { useState } from 'react';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, deleteContact } from './store';

export default function App() {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1>Phonebook</h1>
      <FormRegistation />
      <Filter />
      <Contacts />
    </div>
  );

  // const [filter, setFilter] = useState('');
  // const { items: contacts } = useSelector(state => state.items);
  // const dispatch = useDispatch();

  // const createUser = () => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === addContact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${addContact.name} is already in contacts.`);
  //     return;
  //   }
  // };
  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  // const handleFilterChange = evt => setFilter(evt.currentTarget.value);

  // const getFilterContact = () => {
  //   const normalized = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalized)
  //   );
  // };
}

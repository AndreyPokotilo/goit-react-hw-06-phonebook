import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <h1 className={css.titel}>Phonebook</h1>
      <div className={css.contactSection}>
        <div className={css.formSection}>
          <ContactForm />
        </div>

        <div className={css.listSection}>
          <h2 className={css.titelContacts}>Contacts</h2>
          <Filter />

          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <p className={css.message}>Add a new contact!</p>
          )}
        </div>
      </div>
    </div>
  );
}

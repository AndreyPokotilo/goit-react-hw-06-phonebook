import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const onFilterSearch = () => {
    const normaliseFilter = filterValue.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <ul className={css.listContact}>
      {onFilterSearch().map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          <Contact name={name} number={number} contactId={id} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

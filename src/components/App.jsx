import {useEffect } from 'react';
import shortid from 'shortid';

import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts, getFilter, removeContact, setFilter } from 'redux/phonebookSlice';

import { initialContacts } from 'constants';

export const App = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  //fill default contacts list if book is empty
  useEffect(() => {
    if (!contacts.length) {
      initialContacts.map(contact => {
        dispatch(addContact(contact));
        return null;
      });
    }
  }, [contacts, dispatch]);

  //get contacts list by filter
  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  //redux actions
  const handleAddContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    dispatch(addContact(contact));
  };

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const updateFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  //------------------

  const filteredContacts = getFilteredContacts();
  
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        contacts={contacts}
        onSubmit={handleAddContact}
      ></ContactForm>
      <h2>Contacts</h2>
      <Filter name={filter} onChange={updateFilter}></Filter>
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      ></ContactList>
    </Box>
  );
};

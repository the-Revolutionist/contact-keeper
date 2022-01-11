import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  REMOVE_ALERT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACTS,
} from "../types";

import ContactContext from "./contactContext";
import { contactReducer } from "./contactReducer";
import { useReducer } from "react";
import { v4 } from "uuid";

export const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@email.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "Sara@email.com",
        phone: "111-111-1111",
        type: "professional",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@email.com",
        phone: "111-111-1111",
        type: "personal",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //* add contact
  const addContact = (contact) => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //* delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //* set current contact
  const setCurrent = (id) => {
    dispatch({ type: SET_CURRENT, payload: id });
  };
  //* clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //* update contact
  const updateContact = () => {};
  //* filter contacts
  const filterContacts = () => {};
  //* clear filter
  const clearFilter = () => {};
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactContext;

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
import contactReducer from "./contactReducer";
import { useReducer } from "react";
import uuid from "uuid";

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
        id: 1,
        name: "Sara Watson",
        email: "Sara@email.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 1,
        name: "Harry White",
        email: "harry@email.com",
        phone: "111-111-1111",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //* add contact
  //* delete contact
  //* set current contact
  //* clear current contact
  //* update contact
  //* filter contacts
  //* clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

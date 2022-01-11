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

export const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CLEAR_FILTER:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case SET_CURRENT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case SET_ALERT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    default:
      return state;
  }
};

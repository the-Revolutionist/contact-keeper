import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactContext from "../../context/contact/contactContext";
import { ContactItem } from "./ContactItem";
import { useContext } from "react";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please Enter a Contact...</h4>;
  }

  return (
    <>
      <TransitionGroup className="">
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  );
};

import ContactContext from "../../context/contact/contactContext";
import { ContactForm } from "./ContactForm";
import { ContactItem } from "./ContactItem";
import { useContext } from "react";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <>
      <ContactForm />
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

import { useContext, useState } from "react";

import ContactContext from "../../context/contact/contactContext";

export const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
  });
  const { email, name, phone, type } = contact;

  const handleOnChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleOnChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleOnChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleOnChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={handleOnChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        id=""
        value="professional"
        checked={type === "professional"}
        onChange={handleOnChange}
      />{" "}
      Professional{" "}
      <div>
        <input type="submit" className="btn btn-primary" value="Add Contact" />
      </div>{" "}
    </form>
  );
};

import { useContext, useEffect, useState } from "react";

import ContactContext from "../../context/contact/contactContext";

export const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);
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
    addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
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
        <input
          type="submit"
          className="btn btn-primary"
          value={current ? "Update Contact" : "Add Contact"}
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearCurrent}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

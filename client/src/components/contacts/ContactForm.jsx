import { useState } from "react";

export const ContactForm = () => {
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

  return (
    <form action="">
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
        placeholder="phone"
        name="Phone"
        value={phone}
        onChange={handleOnChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked
        onChange={handleOnChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        id=""
        value="professional"
        onChange={handleOnChange}
      />{" "}
      Professional{" "}
      <div>
        <input type="submit" className="btn btn-primary" value="Add Contact" />
      </div>{" "}
    </form>
  );
};

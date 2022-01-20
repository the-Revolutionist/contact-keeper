import AuthContext from "../../context/auth/authContext";
import { ContactFilter } from "../contacts/ContactFilter";
import { ContactForm } from "../contacts/ContactForm";
import { Contacts } from "../contacts/Contacts";
import { useEffect } from "react";

export const Home = () => {
  const { loadUser } = AuthContext;
  useEffect(() => {
    const res = async () => {
      loadUser();
    };
    console.log(res.data);
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

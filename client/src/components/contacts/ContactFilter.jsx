import { useContext, useEffect, useRef } from "react";

import ContactContext from "../../context/contact/contactContext";

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { clearFilter, filterContacts, filtered } = contactContext;
  const params = useRef("");

  useEffect(() => {
    if (filtered === null) {
      params.current.value = "";
    }
  });

  const handleOnChange = (e) => {
    if (params.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          ref={params}
          placeholder="Filter Contacts..."
          onChange={handleOnChange}
        />
      </form>
    </>
  );
};

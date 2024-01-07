import React from "react";
import { contactData } from "./ContactData";
import { ContactLink } from "./ContactLink";

export const Contacts: React.FC = () => {
  return (
    <div className="gap flex flex-col gap-x-10 gap-y-3 md:flex-row">
      {contactData.map((data) => (
        <ContactLink {...data} />
      ))}
    </div>
  );
};

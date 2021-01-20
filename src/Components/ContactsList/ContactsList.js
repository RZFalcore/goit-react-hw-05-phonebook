import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDelete }) => (
  <ul className={css.contactsList}>
    {contacts.map((contact) => (
      <ContactListItem
        key={contact.id}
        {...contact}
        onDelete={() => onDelete(contact.id)}
      />
    ))}
  </ul>
);

export default ContactsList;

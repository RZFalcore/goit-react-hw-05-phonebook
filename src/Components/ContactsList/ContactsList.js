import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactsList.module.css";
import slide from "../../transitions/quickSlide.module.css";

const ContactsList = ({ contacts, onDelete }) => (
  <TransitionGroup component="ul" className={css.contactsList}>
    {contacts.map((contact) => (
      <CSSTransition
        key={contact.id}
        classNames={slide}
        timeout={500}
        classNames={slide}
        unmountOnExit
      >
        <ContactListItem
          key={contact.id}
          {...contact}
          onDelete={() => onDelete(contact.id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ContactsList;

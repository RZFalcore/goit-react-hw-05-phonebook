import React from "react";
import css from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, phone, onDelete }) => (
  <li className={css.listItem} key={id}>
    <p className={css.text}>{name}</p>
    <p className={css.text}>{phone}</p>
    <button className={css.btn} onClick={onDelete}>
      x
    </button>
  </li>
);

export default ContactListItem;

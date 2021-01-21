import React from "react";
import css from "./ContactsFilter.module.css";

const ContactsFilter = ({ onChange, value }) => (
  <div className={css.filterContainer}>
    <label htmlFor="filter" className={css.label}>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      />
    </label>
  </div>
);

export default ContactsFilter;

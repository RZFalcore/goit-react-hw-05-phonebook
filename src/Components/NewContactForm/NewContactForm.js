import React from "react";
import css from "./NewContactForm.module.css";

const NewContactForm = ({ onSubmit }) => (
  <form className={css.form} onSubmit={onSubmit}>
    <label className={css.label} htmlFor="name">
      Name
      <input className={css.input} type="text" name="name" />
    </label>
    <label className={css.label} htmlFor="phone">
      Phone
      <input
        className={css.input}
        type="tel"
        name="phone"
        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
      />
    </label>
    <button className={css.button} type="submit">
      Add contact
    </button>
  </form>
);

export default NewContactForm;

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NewContactForm from "../NewContactForm/NewContactForm";
import ContactsFilter from "../ContactsFilter/ContactsFilter";
import ContactsList from "../ContactsList/ContactsList";
import css from "./App.module.css";

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContactSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: e.target.name.value,
      phone: e.target.phone.value,
    };

    this.setState((state) => ({ contacts: [...state.contacts, newContact] }));
    console.log("Added new contact.");
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <NewContactForm onSubmit={this.addContactSubmit} />
        <ContactsFilter />
        {contacts.length > 0 && <ContactsList contacts={contacts} />}
      </div>
    );
  }
}

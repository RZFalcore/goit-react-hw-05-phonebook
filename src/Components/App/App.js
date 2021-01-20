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

  handleAddContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = e.target;

    const newContact = {
      id: uuidv4(),
      name: name.value,
      phone: phone.value,
    };

    name.value = "";
    phone.value = "";

    this.setState((state) => ({ contacts: [...state.contacts, newContact] }));

    console.log("Added new contact.");
  };

  handleContactRemove = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
    console.log("Contact was removed.");
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <NewContactForm onSubmit={this.handleAddContactSubmit} />
        <ContactsFilter />
        {contacts.length > 0 && (
          <ContactsList
            contacts={contacts}
            onDelete={this.handleContactRemove}
          />
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import NewContactForm from "../NewContactForm/NewContactForm";
import ContactsFilter from "../ContactsFilter/ContactsFilter";
import ContactsList from "../ContactsList/ContactsList";

import contactsFilter from '../../helpers/contactsFilter'

import css from "./App.module.css";

export default class App extends Component {
  state = {
    contacts: [],
    filterQuery: ""
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

  handleFilterChange = (e) => {
    this.setState(({filterQuery: e.target.value}))
  }


  render() {
    const { contacts, filterQuery } = this.state;

    const filteredContacts = contactsFilter(contacts, filterQuery);
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <NewContactForm onSubmit={this.handleAddContactSubmit} />
        <ContactsFilter onChange={this.handleFilterChange} value={ filterQuery }/>
        {contacts.length > 0 && (
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.handleContactRemove}
          />
        )}
      </div>
    );
  }
}

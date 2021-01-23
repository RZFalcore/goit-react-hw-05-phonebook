import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import AWN from "awesome-notifications"

import NewContactForm from "../NewContactForm/NewContactForm";
import ContactsFilter from "../ContactsFilter/ContactsFilter";
import ContactsList from "../ContactsList/ContactsList";

import contactsFilter from '../../helpers/contactsFilter';
import ifNameExist from '../../helpers/ifNameExist'

import css from "./App.module.css";
import slide from '../../transitions/slide.module.css'

const notifier = new AWN().alert()
export default class App extends Component {
  state = {
    animate: false,
    contacts: [],
    filterQuery: ""
  };
  componentDidMount() {
    this.setState({animate: true})
  }
  
  
  handleAddContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = e.target;
    const { contacts } = this.state;
    
    const newContact = {
      id: uuidv4(),
      name: name.value,
      phone: phone.value,
    };
    
    name.value = "";
    phone.value = "";
    
    
    
    if (ifNameExist(contacts, newContact)) {
      notifier.alert('This name is already exist!')
    } else {
      this.setState((state) => ({ contacts: [...state.contacts, newContact] }));
      console.log("Added new contact.");
    }
    
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
    const { animate, contacts, filterQuery } = this.state;

    const filteredContacts = contactsFilter(contacts, filterQuery);
    return (
      <div className={css.container}>
        <CSSTransition in={animate} timeout={500} classNames={slide} unmountOnExit>
          <h1 className={css.title}>Phonebook</h1>
        </CSSTransition>
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

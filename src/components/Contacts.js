import React, { Component } from "react";
import contactsJson from "../contacts.json";
import ContactDetails from './ContactDetails.js';

class Contacts extends Component {
  state = {
    contacts: contactsJson.slice(0, 5),
  };
  handleSort = () => {
    console.log("Sort works");
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));

    clonedContacts.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (first.name < second.name) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: clonedContacts,
    });
  };

  handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * contactsJson.length);
    let randomContact = contactsJson[randomIndex];

    this.setState({
      contacts: [...this.state.contacts, randomContact],
    });
  };

  handleDelete = (contactId) => {
    console.log("Delete");

    let filteredContacts = this.state.contacts.filter((singleContact) => {
      return singleContact.id !== contactId;
    });

    this.setState({
      contacts: filteredContacts,
    });
  };

  render() {
    return (
      <div>
        <h1> IronContacts </h1>
        <button onClick={this.handleAdd}>Add Random Contact</button>
        <button onClick={this.handleSort}>Sort by name</button>
        {this.state.contacts.map((singleContact, index) => {
          return (
            <ContactDetails
              key={index}
              picture={singleContact.pictureUrl}
              name={singleContact.name}
              popularity={singleContact.popularity}
              id={singleContact.id}
              onDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Contacts;

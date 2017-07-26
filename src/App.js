import React, { Component } from 'react';
import 'whatwg-fetch';
import ContactsApp from './ContactsApp.js';

class App extends Component {
  constructor() {
    super();
    this.state={
      contacts: []
    };
  }

  componentDidMount(){
    fetch('./contacts.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({contacts: responseData});
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    });
  }

  render() {
    return (
      <ContactsApp contacts={this.state.contacts} />
    );
  }
}

export default App;

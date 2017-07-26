import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import ContactList from './ContactList'


class ContactsApp extends Component {
  constructor() {
    super();
    this.state={filterText: "" }
  }

  handleUserInput(searchTerm){
    this.setState({filterText: searchTerm})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput.bind(this)}/>
        <ContactList contacts={this.props.contacts} 
                     filterText={this.state.filterText}/>
      </div>
    );
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;

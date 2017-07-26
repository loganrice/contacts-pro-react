import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    return( <li>{this.props.name} - {this.props.email}</li>)
  }
}

export default ContactItem;

import React from 'react'
import { AddContactContainer, ContactListContainer } from '../../containers'

export default class MainContent extends React.Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      displayAddContactForm: false,
      buttonLabel: 'Add contact',
    }
    this.addContact = this.addContact.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    let buttonLabel
    if (this.props.addingContact) {
      buttonLabel = 'Add contact'
    } else {
      buttonLabel = 'Cancel'
    }
    this.setState({
      buttonLabel: buttonLabel,
    })
  }
  addContact() {
    if (this.props.addingContact) {
      this.props.onCancelAddContact()
    } else {
      this.props.onAddingContact()
    }
  }
  render() {
    return (
      <div className="custom-height">
        <button className="btn btn-primary" onClick={this.addContact}>
          {' '}
          {this.state.buttonLabel}{' '}
        </button>
        {this.props.addingContact ? <AddContactContainer /> : null}
        <ContactListContainer />
      </div>
    )
  }
}

import React from 'react'
import { ContactContainer } from '../containers'

export default class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.contacts = []
  }
  render() {
    return (
      <div>
        {this.props.contacts.map(contact => {
          return <ContactContainer key={contact.id} contact={contact} />
        })}
      </div>
    )
  }
}

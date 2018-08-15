import React from 'react'
import validateContact from '../utils/validation'

export default class AddContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      emailId: '',
      contactNumber: '',
      error: '',
      contactAdded: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    const inputs = event.target.getElementsByTagName('input')
    const newContact = {
      firstName: inputs.firstName.value,
      lastName: inputs.lastName.value,
      contactNumber: inputs.contactNumber.value,
      emailId: inputs.emailId.value,
    }
    let error = validateContact(newContact)
    if (!error) {
      this.props.doAddContact(newContact)
    } else {
      this.setState({
        error,
      })
    }
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <h3>Add Contact Form</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input id="firstName" name="firstName" type="text" />
          <label htmlFor="lastName">Last Name: </label>
          <input id="lastName" name="lastName" type="text" />
          <label htmlFor="contactNumber">Contact Number: </label>
          <input id="contactNumber" name="contactNumber" type="text" />
          <label htmlFor="emailId">Email: </label>
          <input id="emailId" name="emailId" type="text" />
          <input type="submit" value="Save" />
          {this.state.error ? (
            <div className="alert alert-danger mt-2" role="alert">
              {this.state.error}
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
    )
  }
}

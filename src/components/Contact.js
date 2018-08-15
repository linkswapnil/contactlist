import React from 'react'
import validateContact from '../utils/validation'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayEditContactForm: false,
      firstName: props.contact.firstName,
      lastName: props.contact.lastName,
      contactNumber: props.contact.contactNumber,
      emailId: props.contact.emailId,
    }
    this.deleteContact = this.deleteContact.bind(this)
    this.editContact = this.editContact.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  deleteContact() {
    this.props.doDelete(this.props.contact)
  }
  editContact() {
    this.setState({
      displayEditContactForm: !this.state.displayEditContactForm,
    })
  }
  handleSubmit(event) {
    const newContact = {
      id: this.props.contact.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      contactNumber: this.state.contactNumber,
      emailId: this.state.emailId,
    }
    let error = validateContact(newContact)
    if (!error) {
      this.props.doEdit(newContact)
      this.setState({
        displayEditContactForm: !this.state.displayEditContactForm,
      })
    } else {
      this.setState({
        error,
      })
    }
    event.preventDefault()
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  render() {
    return (
      <div className="mb-1">
        {this.state.displayEditContactForm ? (
          <form onSubmit={this.handleSubmit} className="card max-width-35 p-3">
            <div className="row">
              <label className="card-title col-4" htmlFor="firstName">
                First Name:{' '}
              </label>
              <input
                className="col-8"
                value={this.state.firstName}
                id="firstName"
                name="firstName"
                type="text"
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <label className="card-title col-4" htmlFor="lastName">
                Last Name:{' '}
              </label>
              <input
                className="col-8"
                value={this.state.lastName}
                id="lastName"
                name="lastName"
                type="text"
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <label className="card-title col-4" htmlFor="contactNumber">
                Contact Number:{' '}
              </label>
              <input
                className="col-8"
                value={this.state.contactNumber}
                id="contactNumber"
                onChange={this.handleChange}
                name="contactNumber"
                type="text"
              />
            </div>
            <div className="row">
              <label className="card-title col-4" htmlFor="emailId">
                Email:{' '}
              </label>
              <input
                className="col-8"
                id="emailId"
                value={this.state.emailId}
                name="emailId"
                onChange={this.handleChange}
                type="text"
              />
            </div>
            {this.state.error ? (
              <div className="alert alert-danger mt-2" role="alert">
                {this.state.error}
              </div>
            ) : (
              ''
            )}
            <input className="btn btn-primary" type="submit" value="Save" />
          </form>
        ) : (
          <div className="card max-width-35 p-3">
            <span className="pull-right">
              <i
                id="editButton"
                onClick={this.editContact}
                className="fa fa-2x fa-pencil-square-o pull-right"
                aria-hidden="true"
              />
              <i
                id="deleteButton"
                onClick={this.deleteContact}
                className="fa fa-2x fa-trash-o pull-right"
                aria-hidden="true"
              />
            </span>
            <h5 className="card-title">FirstName : {this.props.contact.firstName}</h5>
            <h5 className="card-title">LastName : {this.props.contact.lastName}</h5>
            <h5 className="card-title">Email : {this.props.contact.emailId}</h5>
            <h5 className="card-title">Contact Number : {this.props.contact.contactNumber}</h5>
          </div>
        )}
      </div>
    )
  }
}

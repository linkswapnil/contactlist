import { connect } from 'react-redux'
import { Contact } from '../components'
import { deleteContact, editContact } from '../actions/action.contactList'

export const mapDispatchToProps = dispatch => {
  return {
    doDelete: data => dispatch(deleteContact(data)),
    doEdit: data => dispatch(editContact(data)),
  }
}

export default connect(null, mapDispatchToProps)(Contact)
